const { deleteObject } = require('../utils/RequestWrapper');
const { loadPrinters,createPrinter,deletePrinter } = require('../models/Printer')

const loadPrintersCaller = async (facilityCode) =>{
    try {
        return await loadPrinters(facilityCode);
    }catch(ex){
        console.log('Exception in loadPrintersCaller',ex);
    }
}


const createPrinterCaller = async (createObj) =>{
    try {
        return await createPrinter(createObj);
    }catch(ex){
        console.log('Exception in createPrinterCaller',ex);
    }
}


const  deleteFacilityPrinterCaller = (printerId) => {
    try {
        return deletePrinter(deleteObject,printerId);
    }catch(ex){
        console.log('Exception in deleteFacilityPrinterCaller',ex);
    }
}


module.exports = {
    loadPrintersCaller,createPrinterCaller,deleteFacilityPrinterCaller
}