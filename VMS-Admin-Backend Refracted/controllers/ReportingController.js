const ValidatorUtils = require('../utils/validatorUtils');
const { findADHOCReportsCaller , findVisitorsCaller } = require('../services/ReportingService');
const router = express.Router();
const reportingServiceObj = new ReportingService();
const moment = require('moment');
const {isValidDate} = require('../utils/validatorUtils');
const { ErrorResponse , SuccessResponse , ReturnObject } = require('../utils/ResponseWrapper');

router.get("/userSearch", async (req, res) => {

    try{
        const constructParams = ValidatorUtils.constructUserSearchParams(req);
        const isValid = ValidatorUtils.isvalidrequestParamForUserSearch(constructParams);
        if (isValid == 'emptyError') {
            return res.json({
                message: "error",
                data: 'there must be any search query'
            });
        }
        if (isValid.error) {
            return res.json({
                message: "error",
                data: isValid.error
            });
        }
        const {
            firstname,
            lastname,
            emailadd,
            companyname
        } = isValid.value;
        const searchVisitorInfo = await findVisitorsCaller(firstname, lastname, emailadd, companyname);
        const response = ReturnObject(200,'Success',searchVisitorInfo);
        SuccessResponse(response,res);
    }catch(ex){
        console.log('Exception is  :',ex);
        const response = ReturnObject(400,'Failed',[]);
        ErrorResponse(response);

    }
});

router.get("/reporting/adHocReport", async(req, res) => {
    try{
        let query = req.query;
        if(!query.fromDate || !query.toDate)
        {
            return res.json({
                    message: "Failure ",
                    data: "from date and to date is mandatory",
                    status:400
                });
        }
        if(moment(query.fromDate).isAfter(query.toDate)){
            return res.json({
                message: "Failure ",
                data: " To Date should be after From Date",
                status:400
            });
        }
        const Dates = {
            fromDate : query.fromDate,
            toDate : query.toDate
        }
        const validationError = isValidDate(Dates)
    
        if(validationError.error){
            return res.json({
                message: "Failure ",
                data: validationError.error,
                status:400
            });
        }
        
        const adHocReportInfo = await findADHOCReportsCaller(query)
        const response = ReturnObject(200,'Success',adHocReportInfo);
        SuccessResponse(response,res);
    }catch(ex){
        console.log('Exception is  :',ex);
        const response = ReturnObject(400,'Failed',[]);
        ErrorResponse(response);

    }
});

module.exports = moment;