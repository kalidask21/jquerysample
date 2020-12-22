/**
 * Utility functions used for live visitor feed screen
 */


const Joi = require('joi');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const moment = require('moment');
const Facility = require('../models/Facility');
const {getStateTimeZone} = require('../models/TimeZones');
const Formatter = "YYYY-MM-DD HH:mm:ss";



/**
 * Takes params from the request and does validation
 * @param {object}  inputObject
 * @return {object}
 */
const isvalidrequestParam = (inputObject) => {
    const schema = Joi.object().keys({
        page: Joi.number(),
        limit: Joi.number(),
        search: Joi.string(),
        facilityId : Joi.number(),
        viewBy: Joi.string()
    });
    const validationResult = Joi.validate(inputObject, schema);
    return validationResult;
}

const isvalidrequestParamForSearch = (inputObject) => {
    const schema = Joi.object().keys({
        search: Joi.string().alphanum()
    });
    const validationResult = Joi.validate(inputObject, schema);
    return validationResult;
}

/**
 * Currently passing {page, limit, search and viewBy} as params from request.
 * 
 * @param {object} request
 * @return {object}
 */
const constructVisitorParams = (request) => {
    if (request.query != null) {
        return {
            search: request.query.search || 'empty',
            viewBy: request.query.viewBy || 'all',
            facilityId : request.query.facilityId || 0

        }
    }
}
/**
 * Currently passing { search } as params from request.
 * 
 * @param {object} request
 * @return {object}
 */

const constructSearchParams = (request) => {
    if (request.query != null) {
        return {
            search: request.query.search || 'empty'
        }
    }
}

const constructUserSearchParams = (request) => {
    if (request.query != null) {
        return {
            firstname: request.query.firstname || '%',
            lastname: request.query.lastname || '%',
            emailadd: request.query.emailadd || '%',
            companyname: request.query.companyname || '%'
        }
    }
}

const isvalidrequestParamForUserSearch = (inputObject) => {
    console.log(inputObject);
    const schema = Joi.object().keys({
        firstname: Joi.string(),
        lastname: Joi.string(),
        emailadd: Joi.string(),
        companyname: Joi.string()
    });
    const validationResult = Joi.validate(inputObject, schema);
    if (validationResult.value) {
        if (validationResult.value.firstname == '%' && validationResult.value.lastname == '%' && validationResult.value.emailadd == '%' && validationResult.value.companyname == '%') {
            return 'emptyError';
        }
    }
    return validationResult;
}


const isValidDate = (inputObject) => {
    console.log(inputObject);
    const schema = Joi.object().keys({
        fromDate: Joi.date(),
        toDate: Joi.date()
    });
    const validationResult = Joi.validate(inputObject, schema);
    return validationResult;
}
/**
 * Gets query param search and find macth with following fields
 */

const constructWhereClauseForSearch = (search) => {
    if (search !== 'empty') {
        return {
            [Op.or]: {
                visitor_fname: {
                    [Op.like]: `%${search.trim()}%`
                },
                visitor_lname: {
                    [Op.like]: `%${search.trim()}%`
                },
                visitor_company_name: {
                    [Op.like]: `%${search.trim()}%`
                },
                visitor_phone: {
                    [Op.like]: `%${search.trim()}%`
                }
            }
        }
    }

}



const constructWhereClauseForUpcomingVisitor = () => {
    const UTCTZ = moment().utc();
    const previousDateTime = moment().add(1,'day')
        .add(-UTCTZ.get('hours'), 'hours')
        .add(-UTCTZ.get('minutes'), 'minutes')
        .add(-UTCTZ.get('seconds'), 'seconds')
        .utc();
    const currentDateTime = moment().utc();

    return {
        [Op.and]: {
            visit_end_ts: {
                [Op.lt]: `${previousDateTime}`
            },
            visit_start_ts: {
                [Op.gt]: `${currentDateTime}`
            }
        }
    }
}

/**
 * viewBy filter shows list of visits in 24 hr window.
 */


const constructWhereClauseForViewBy = (viewBy,stateTz) => {
    const UTCTZ = moment().tz(stateTz);
    console.log(UTCTZ);
    const currentDate = moment()
        .add(-UTCTZ.get('hours'), 'hours')
        .add(-UTCTZ.get('minutes'), 'minutes')
        .add(-UTCTZ.get('seconds'), 'seconds')
        .utc();
    const previousDateTime = moment().tz(stateTz).add(-1,'day')
    const currentDateTime = moment().tz(stateTz);

    if (viewBy === 'all') {
        return {
            visit_checkin_ts :{
                [Op.between] : [`${previousDateTime.format(Formatter)}`,`${currentDateTime.format(Formatter)}`]
            }
        }
    } else if (viewBy === 'current') {
        return {
            visit_checkin_ts :{
                [Op.between] : [`${previousDateTime.format(Formatter)}`,`${currentDateTime.format(Formatter)}`]
            },
            visit_checkout_ts: {
                [Op.eq]: null
            }
        }
    } else if (viewBy === 'past') {
        return {

            visit_checkout_ts: {
                [Op.lt]: `${currentDateTime.format(Formatter)}`
            },
            visit_checkin_ts: {
                    [Op.gte]: `${previousDateTime.format(Formatter)}`
            }

        }
    }
}


const constructCheckoutTSParams = (visitid) => {
    return {
        visit_id: visitid
    }
}

const constructWhereClauseForSearchVisitor = (firstname, lastname, emailadd, companyname) => {

    return {
        [Op.and]: {
            visitor_fname: {
                [Op.like]: `${firstname.trim()}`
            },
            visitor_lname: {
                [Op.like]: `${lastname.trim()}`
            },
            visitor_company_name: {
                [Op.like]: `${companyname.trim()}`
            },
            visitor_email_add: {
                [Op.like]: `${emailadd.trim()}`
            }
        }
    }
}
const constructWhereClauseForAdHocReport = (query) => {

    let host_fname = query.hostFname ? query.hostFname : '%';
    let host_lname = query.hostLname ? query.hostLname : '%';
    let fromDate = query.fromDate;
    let toDate = query.toDate;
    
    fromDate = moment(fromDate).format(Formatter);
    toDate = moment(toDate).add(1,'days').add(-1,'seconds').format(Formatter);
    console.log(fromDate ,toDate );
    return {
        [Op.and]: {
            visited_host_fname: {
                [Op.like]: `${host_fname.trim()}`
            },
            visited_host_lname: {
                [Op.like]: `${host_lname.trim()}`
            },
            visit_checkin_ts :{
                [Op.between] : [`${fromDate}`,`${toDate}`]
            }
        }
    }
}
const constructWhereClauseForAdHocReportProfile = (query) => {
    let fname = query.visitorFname ? query.visitorFname : '%';
    let lname = query.visitorLname ? query.visitorLname : '%';
    let cmpnyname = query.company ? query.company : '%';
    return {
        [Op.and]: {
            visitor_fname: {
                [Op.like]: `${fname.trim()}`
            },
            visitor_lname: {
                [Op.like]: `${lname.trim()}`
            },
            visitor_company_name: {
                [Op.like]: `${cmpnyname.trim()}`
            }
        }
    }
}
const constructWhereClauseForAdHocReportFacility = (query) => {
    let facility_name = query.facilityName ? query.facilityName : '%';
    return {
        [Op.and]: {
            facility_name: {
                [Op.like]: `${facility_name.trim()}`
            }
        }
    }
    return {};
}

const findStateTimezone = async (stateCode,CtyCode) =>{
   
    const timezoneInfo = await getStateTimeZone.findOne({
        where: {
            country: CtyCode,
            state: stateCode
        }
    });
    if(timezoneInfo){
         return timezoneInfo.timezone;
    }
    return 'America/Chicago';
}

const findfacilityState = async (facilityId) =>{
    const facilityInfo = await Facility.getFacility.findOne({
        where: {
            facility_code: facilityId,
            is_active: 1
        }
    });
    if(facilityInfo){
        return facilityInfo.facility_country + '-' +facilityInfo.facility_state;
    }
    else{
        return 'US-Arkansas';
    }
}

const searchFilter = (data,searchVal) => {
    const filterResult =  (data.visitProfile.visitor_fname.search(new RegExp(searchVal, "i")) > -1
    || data.visitProfile.visitor_lname.search(new RegExp(searchVal, "i")) > -1
    || data.visited_host_fname.search(new RegExp(searchVal, "i")) > -1
    || data.visited_host_lname.search(new RegExp(searchVal, "i")) > -1
    || data.visitProfile.visitor_company_name.search(new RegExp(searchVal, "i")) > -1)
    console.log('filterResult :',filterResult);
    return filterResult;
}

module.exports = {
    isvalidrequestParam,
    constructVisitorParams,
    constructWhereClauseForSearch,
    constructWhereClauseForViewBy,
    constructSearchParams,
    constructWhereClauseForUpcomingVisitor,
    isvalidrequestParamForSearch,
    constructCheckoutTSParams,
    constructWhereClauseForSearchVisitor,
    constructWhereClauseForAdHocReport,
    constructWhereClauseForAdHocReportFacility,
    constructWhereClauseForAdHocReportProfile,
    constructUserSearchParams,
    isvalidrequestParamForUserSearch,
    findfacilityState,
    findStateTimezone,
    searchFilter,
    isValidDate
}