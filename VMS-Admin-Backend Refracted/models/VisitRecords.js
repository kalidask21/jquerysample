const { ProfileInfo, FacilityLocation,  PreRegVisitInfo,  PreRegVisitorProfileInfo } = require('./VisitorMapping');
const {PRE_REG_VISITORS_SCHEMA } = require('./dbschemas/PreRegisterVisitorsSchema');
const ValidatorUtils = require('../utils/validatorUtils');
const moment = require('moment');
const { VISIT_RECORD_BY_TIMEZONE,VISIT_RECORD_BY_UTC , TABLE_INFO} = require('./dbschemas/VisitRecordsSchema')


const visitRecordByTZ = (timeZone) => {
    if(timeZone === 'UTC'){
        return sequelize.define('visit_records',VISIT_RECORD_BY_UTC,TABLE_INFO);
    }else {
        return sequelize.define('visit_records',VISIT_RECORD_BY_TIMEZONE(timeZone),TABLE_INFO);
    }
}

const loadVisitRecordsBySearchFilter = async (search, viewBy,facilityId,timeZone) => {
    const viewByClause = ValidatorUtils.constructWhereClauseForViewBy(viewBy, timeZone);
    return await visitRecordByTZ(timeZone).findAll({
        where: viewByClause,
        include: [{
            association: ProfileInfo(timeZone)
        }, {
            association: FacilityLocation(timeZone),
            where:{
                facility_code : facilityId,
                is_active : 1
            } 
        }]
    });
}

const loadPreVisitRecordsBySearchFilter = async (search) => {
    const whereClause = ValidatorUtils.constructWhereClauseForSearch(search);
    const whereClauseUpcoming = ValidatorUtils.constructWhereClauseForUpcomingVisitor(search);
    return await PPRE_REG_VISITORS_SCHEMA.findAll({
        include: [{
            association: VisitorMapping.PreRegVisitorProfileInfo,
            where: whereClause
        }, {
            association: VisitorMapping.PreRegVisitInfo,
            where:whereClauseUpcoming
        }]
    });

}

const updateCheckoutTimeByVisitId = async (visitid) => {
    const whereClause = ValidatorUtils.constructCheckoutTSParams(visitid);
    const LocalTime = new Date();
    const UTCTime = `${LocalTime.getUTCFullYear()}-${LocalTime.getUTCMonth()+1}-${LocalTime.getUTCDate()} ${LocalTime.getUTCHours()}:${LocalTime.getUTCMinutes()}:${LocalTime.getUTCSeconds()}.0000000+00:00`;
    const updateRecord = {
        visit_checkout_ts : UTCTime
    }
    const updateRecordUTC = {
        visit_checkout_ts : moment().utc()
    }
    console.log(' updateRecord ',updateRecord);
    console.log(' updateRecordUTC ',updateRecordUTC);
    
    try {
        const visitRecord = await visitRecordByTZ('UTC').update(updateRecordUTC, {
            where: whereClause
        });

        if(visitRecord > 0){
            const responsedata = await visitRecordByTZ('UTC').findById(visitid);
            return responsedata;
         }else{
            return {};
         }
    } catch (ex) {
        console.log('Exec : '+ex);
    }
    
}

const findADHocReports= async (query) => {
    const whereClauseforVisitRecords = ValidatorUtils.constructWhereClauseForAdHocReport(query);
    const whereClauseforProfileInfo = ValidatorUtils.constructWhereClauseForAdHocReportProfile(query);
    const whereClauseforFacility = ValidatorUtils.constructWhereClauseForAdHocReportFacility(query);
    return await visitRecordByTZ('UTC').findAll({
        where: whereClauseforVisitRecords,
        include: [{
            association: VisitorMapping.ProfileInfo,
            where: whereClauseforProfileInfo
        }, {
            association: VisitorMapping.FacilityLocation,
            where: whereClauseforFacility
        }]
    });
}


module.exports = {
    visitRecordByTZ,
    loadVisitRecordsBySearchFilter,
    loadPreVisitRecordsBySearchFilter,
    updateCheckoutTimeByVisitId,
    findADHocReports
}
