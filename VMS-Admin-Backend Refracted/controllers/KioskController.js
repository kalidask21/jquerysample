/**
 * KioskController
 * @description :: controller for managing facilities
 */
const Kiosk = require('../models/Kiosk');
const router = express.Router();
const { loadKiosksCaller , createKioskCaller , deleteFacilityKioskCaller } = require('../services/KioskService')

router.get("/:facilityId/kiosks", async (req, res) => {
    try{
        const facilityCode = req.params.facilityId;
        const kiosks = loadKiosksCaller(facilityCode);
        const response = ReturnObject(200,'Success',kiosks);
        SuccessResponse(response,res);
   }catch(ex){
       console.log('Exception is  :',ex);
       const response = ReturnObject(400,'Failed',[]);
       ErrorResponse(response,res);

   }
});
router.post("/:facilityId/create/kiosk", upload.array(), async (req, res) => {
   try{
        const facilityCode = req.params.facilityId;
        const createObj = createKioskBody(req.body);
        const kiosk = createKioskCaller(createObj,facilityCode);
        const response = ReturnObject(200,'Success',kiosk);
        SuccessResponse(response,res);
   }catch(ex){
       console.log('Exception is  :',ex);
       const response = ReturnObject(400,'Failed',[]);
       ErrorResponse(response,res);

   }
});
router.put("/:facilityId/delete/kiosk/:kioskId", async (req, res) => {
    try{
        const kioskRegCode = kioskId;
        const deletedKiosk = deleteFacilityKioskCaller(kioskRegCode);
        const response = ReturnObject(200,'Success',deletedKiosk);
        SuccessResponse(response,res);
   } catch(ex){
       console.log('Exception is  :',ex);
       const response = ReturnObject(400,'Failed',[]);
       ErrorResponse(response,res);

   }
});

module.exports = router
