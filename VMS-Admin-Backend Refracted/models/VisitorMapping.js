const { VISITOR_PROFILE } = require('./dbschemas/VisitorProfileSchema');
const { visitRecordByTZ } = require('./VisitRecords');
const { FACILITY} = require('./dbschemas/FacilitySchema');
const { PRE_REG_VISITORS_SCHEMA } = require('./dbschemas/PreRegisterVisitorsSchema');
const { PRE_REG_VISITS_SCHEMA} = require('./dbschemas/PreRegisterVisitsSchema');

/**
 * Mapping Visit Records to Visitor Profile using BelongsTo association
 */


const ProfileInfo = (timeZone) =>{
    return visitRecordByTZ(timeZone).belongsTo(VISITOR_PROFILE,{
            as: 'visitProfile',
            foreignKey: 'visitor_profile_visitor_id',
            targetKey: 'visitor_id'

    })
}

const FacilityLocation = (timeZone) =>{
    return visitRecordByTZ(timeZone).belongsTo(FACILITY, {
            as: 'facility_information',
            foreignKey: 'facility_facility_code',
            targetKey: 'facility_code'
    
    })
}
/**
 * Mapping Belong To Visitors who pre-registered
 */

const PreRegVisitInfo = PRE_REG_VISITORS_SCHEMA.belongsTo(PRE_REG_VISITS_SCHEMA, {
    as: 'pre_reg_visitor',
    foreignKey: 'PRE_REG_VISITS_PRE_REG_VISIT_ID',
    targetKey: 'pre_reg_visit_id'
})

const PreRegVisitorProfileInfo = PRE_REG_VISITORS_SCHEMA.belongsTo(VISITOR_PROFILE, {
    as: 'pre_reg_visitor_profile',
    foreignKey: 'visitor_profile_visitor_id',
    targetKey: 'visitor_id'
})

module.exports = {
    ProfileInfo,
    FacilityLocation,
    PreRegVisitInfo,
    PreRegVisitorProfileInfo
}