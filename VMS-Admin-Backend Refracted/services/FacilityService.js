
const { retriveLocations,findFacilityByFacilityId ,createFacility ,updateFacility,  deleteFacility } = require('../models/Facility')
const { deleteFacilityKiosk } = require('../services/KioskService');
const { deleteFacilityPrinter } = require('../services/PrinterService');

const getFacilities = async ()=>{

}

const getFacilityCaller = async (facilityCode)=>{
    try{
        return await findFacilityByFacilityId(facilityCode);
    }
    catch(ex){
       console.log('Exception in getFacility',ex);
    }  
}

const updateFacilityCaller = async (updatedFacility,facilityCode)=>{
    try{
        return await updateFacility(updatedFacility,facilityCode)
    }
    catch(ex){
       console.log('Exception in getFacility',ex);
    }  
}

const deleteFacilityCaller = async (facilityCode)=>{
    try{
        await deleteFacilityPrinter(facilityCode);
        await deleteFacilityKiosk(facilityCode);
        const deletedKiosk = await deleteFacility(facilityCode);
        return deletedKiosk;
    }
    catch(ex){
       console.log('Exception in deleteFacility',ex);
    }  
    
}
const createFacilityCaller = async (newFacility)=>{
    try{
        return createFacility(newFacility);
    }
    catch(ex){
       console.log('Exception in createFacility',ex);
    }
    
}

const locationsCaller = async ()=>{
    try{
        const locations = await retriveLocations();
        return createUniqueLocation(locations); 
    }
    catch(ex){
       console.log('Exception in locations',ex);
    }
}

const createUniqueLocation = (locations) => {
    let data = [];
    let result = locations.forEach((ele)=> {
        ele.dataValues.unique = `${ele.dataValues.facility_state}, ${ele.dataValues.facility_country}`;
        data.push(ele.dataValues);
        return true;
    });
    return lodash.uniqBy(data,'unique');

}

module.exports ={
    getFacilitiesCaller,
    getFacilityCaller,
    createFacilityCaller,
    updateFacilityCaller,
    deleteFacilityCaller,
    locationsCaller
}