
const { deleteObject } = require('../utils/RequestWrapper');
const { loadKiosks ,createKiosk ,deleteKiosk }   = require('../models/Kiosk')

const loadKiosksCaller = async (facilityCode) => {
    try {
        return await loadKiosks(facilityCode);
    }catch(ex){
        console.log('Exception in loadKiosks',ex);
    }
}

const createKioskCaller = async (createKioskBody,facilityCode) => {
    try {
        return await createKiosk(createKioskBody,facilityCode);
    }catch(ex){
        console.log('Exception in createKiosk',ex);
    }
}

const deleteFacilityKioskCaller = async (kioskRegCode) => {
    try {
        return await deleteKiosk(deleteObject,kioskRegCode);
    }catch(ex){
        console.log('Exception in deleteFacilityKiosk',ex);
    }
}

module.exports = {
    loadKiosksCaller,
    deleteFacilityKioskCaller,
    createKioskCaller
}