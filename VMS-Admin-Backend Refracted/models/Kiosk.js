'use strict'; 

const { KIOSK,CREATE_KIOSK } = require('./dbschemas/KioskSchema');

const loadKiosks = async (facilityCode) =>{
    return await KIOSK.findAll({
    where: {
        facility_code: facilityCode ,
        is_active: 1
    },
    order: [
        ['kiosk_name', 'DESC'],
    ]
    });
}

const createKiosk = async (createKioskObj,facilityCode) =>{
    const kioskCount = await KIOSK.count({
        where: {
            facility_code : facilityCode
        }
    }) + 1;
    return await CREATE_KIOSK.create(createKioskObj);
}
        
const deleteKiosk = async (deleteKiostObj , kioskRegCode) =>{
    const kiosk = await KIOSK.update(deleteKiostObj, {
        where:{
                kiosk_reg_code: kioskRegCode
         }
    });   
}             

module.exports ={ loadKiosks ,createKiosk ,deleteKiosk};
