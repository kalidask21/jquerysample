/**
 * PrinterController
 * @description :: controller for managing Printers
 */
const jwt = require('jsonwebtoken');
const Printer = require('../models/Printer');
const router = express.Router();
const { createPrinterBody } = require('../utils/RequestWrapper')
const { loadPrintersCaller , createPrinterCaller ,deleteFacilityPrinterCaller } = require('../services/PrinterService')


router.get("/:facilityId/printers", async (req, res) => {
    try{
        const facilityCode = req.params.facilityId;
        const printers  = loadPrintersCaller(facilityCode);
        const response = ReturnObject(200,'Success',printers);
        SuccessResponse(response,res);
    }catch(ex){
        console.log('Exception is  :',ex);
        const response = ReturnObject(400,'Failed',[]);
        SuccessResponse(response);

    } 
   
});
router.post("/:facilityId/printer/create", upload.array(), async (req, res) => {
    try{
        const facilityCode = req.params.facilityId;
        const createdObj = createPrinterBody(req.body);
        const printers  = createPrinterCaller(createdObj,facilityCode);
        const response = ReturnObject(200,'Success',printers);
        SuccessResponse(response,res);
    }catch(ex){
        console.log('Exception is  :',ex);
        const response = ReturnObject(400,'Failed',[]);
        SuccessResponse(response);

    }
    
});
router.put("/printer/delete/:printerId", async (req, res) => {
    try{
        const printerIdReq = req.params.printerId;
        const printers  = deleteFacilityPrinterCaller(printerIdReq);
        const response = ReturnObject(200,'Success',printers);
        SuccessResponse(response,res);
    }catch(ex){
        console.log('Exception is  :',ex);
        const response = ReturnObject(400,'Failed',[]);
        SuccessResponse(response);

    }
});

module.exports = router;
