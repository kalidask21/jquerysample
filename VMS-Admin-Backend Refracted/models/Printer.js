'use strict'; 

const { PRINTER,CREATE_PRINTER } = require('./dbschemas/PrinterSchema');

const loadPrinters = async(facilityCode) =>{
    return await PRINTER.findAll({
    where: {
        facility_facility_code: facilityCode,
        is_active: 1
    }
})
}
const createPrinter = async (createObj) =>{
    return await CREATE_PRINTER.create(createObj);
}

const deletePrinter = async (deleteObj,printerId) =>{
    return await PRINTER.update(deleteObj, {
        where: {
            printer_id: printerId
        }
    })
}

module.exports = {
    loadPrinters , createPrinter , deletePrinter
}
