

'use strict'; 
const { deleteObject } = require('../utils/RequestWrapper');
const {FACILITY,CREATE_FACILITY,DELETE_FACILITY,LOCATIONS} = require('./dbschemas/FacilitySchema')

const retriveLocations = async () =>{
     return await LOCATIONS.findAll({ where: { is_active: 1 }});
} 

const deleteFacility = (facilityCode) =>{
    return FACILITY.update(deleteObject, {
        where: { facility_code: facilityCode }
    })
}

const createFacility = (newFacility) =>{
    return await CREATE_FACILITY.create(newFacility);
}

const findFacilityByFacilityId = (facilityCode) =>{
    return FACILITY.findOne({
        where: {
            facility_code: facilityCode,
            is_active: 1
        }
    })
}

const updateFacility = (UpdateObject,facilityCode) => {
    const updateFacility = await FACILITY.update(UpdateObject , {
        where: {
            facility_code: facilityCode
        }
    });
}


module.exports = {
    retriveLocations,
    deleteFacility,
    createFacility,
    findFacilityByFacilityId,
    updateFacility
}
