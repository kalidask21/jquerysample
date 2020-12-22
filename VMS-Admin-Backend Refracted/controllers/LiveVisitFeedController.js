/**
 * Manage Visit records and visitor profile 
 */

const {  loadVisitRecordsCaller, loadPreVisitRecordsCaller, updateCTByVisitIdCaller} = require('../services/LiveVisitFeedService');
const ValidatorUtils = require('../utils/validatorUtils');
const router = express.Router();
let _ = require('lodash');
const { ErrorResponse , SuccessResponse , ReturnObject } = require('../utils/ResponseWrapper');

router.get("/livevisitorfeed", (req, res)=>  {
  try{
      const constructParams = ValidatorUtils.constructVisitorParams(req);
      const isValid = ValidatorUtils.isvalidrequestParam(constructParams);
      const { search,viewBy,facilityId } = isValid.value;
        if (isValid.error) {
          return res.json({
            message: "error",
            data: isValid.error
          });
      }
      const visitorsInfo = loadVisitRecordsCaller(search,viewBy,facilityId);
      const response = ReturnObject(200,'Success',visitorsInfo);
      SuccessResponse(response,res);
    }catch(ex){
      console.log('Exception is  :',ex);
      const response = ReturnObject(400,'Failed', []);
      SuccessResponse(response,res);

    }
});

router.get("/livevisitorfeed/upcomingVisitors", (req, res) =>  {
  try{
        const constructParams = ValidatorUtils.constructSearchParams(req);
        const isValid = ValidatorUtils.isvalidrequestParamForSearch(constructParams);
        const {
          search
        } = isValid.value;
        if (isValid.error) {
          return res.json({
            message: "error",
            data: isValid.error
          });
        }
        const preVisitorsInfo = loadPreVisitRecordsCaller(search);
        const response = ReturnObject(200,'Success',preVisitorsInfo);
        SuccessResponse(response,res);
      }catch(ex){
        console.log('Exception is  :',ex);
        const response = ReturnObject(400,'Failed', []);
        ErrorResponse(response,res);

      }
});

router.put("/livevisitorfeed/updateCheckout", async(req, res) => {
    try{
       const visitid = req.body.visitid;
       const updateCheckout = await updateCTByVisitIdCaller(visitid)
        const response = ReturnObject(200,'Success',updateCheckout);
        SuccessResponse(response,res);
    }catch(ex){
      console.log('Exception is  :',ex);
      const response = ReturnObject(400,'Failed', []);
      ErrorResponse(response,res);

    }
});

module.exports = router; 