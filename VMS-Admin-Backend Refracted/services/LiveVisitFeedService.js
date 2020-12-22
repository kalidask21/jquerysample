/**
 * Service to fetch the visit records
 */

const {   visitRecordByTZ, loadVisitRecordsBySearchFilter, loadPreVisitRecordsBySearchFilter, updateCheckoutTimeByVisitId } = require('../models/VisitRecords');
const { findfacilityState , findStateTimezone ,searchFilter } = require('../utils/validatorUtils');

    const loadVisitRecordsCaller = async (searchVal, viewBy,facilityId) => {
        try {
            const facilityStateCtry = await findfacilityState(facilityId);
            const ctry = facilityStateCtry.split('-')[0];
            const state = facilityStateCtry.split('-')[1];
            const timeZone = await findStateTimezone(state,ctry);
            const loadedVisitRecords =  await loadVisitRecordsBySearchFilter(searchVal,viewBy,facilityId,timeZone);
            const filteredVRs = loadedVisitRecords.filter((data) => {
                    data.facility_information.dataValues.timezone = timeZone;
                    if(searchVal!=undefined && searchVal!=''){
                    if(searchVal.trim() === 'empty'){
                            return true;
                    }
                    }
                    return searchFilter(data,searchVal);    
            })
                    return filteredVRs;
            }catch(ex){
            console.log('Exception in loadVisitRecordsCaller',ex);
        }
    }

    const loadPreVisitRecordsCaller  = async (search) => {
        try {
            return await loadPreVisitRecordsBySearchFilter(search);
        }catch(ex){
            console.log('Exception in loadVisitRecordsCaller',ex);
        }  
    }

    const updateCTByVisitIdCaller = async (visitid) => {
        try {
            return await updateCheckoutTimeByVisitId(visitid);
        }catch(ex){
            console.log('Exception in updateCTByVisitIdCaller',ex);
        }
    }


module.exports = {
    loadVisitRecordsCaller,
    loadPreVisitRecordsCaller,
    updateCTByVisitIdCaller
}