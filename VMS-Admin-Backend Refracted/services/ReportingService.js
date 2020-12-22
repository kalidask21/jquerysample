/**
 * Service to fetch the Reporting
 */
const { getProfiles } = require('../models/VisitorProfile');
const { findADHocReports } = require('../models/VisitRecords');


    const findVisitorsCaller  = async (firstname, lastname, emailadd, companyname) => {
        try {
            return await getProfiles(firstname, lastname, emailadd, companyname);
        }catch(ex){
            console.log('Exception in getVisitorsCaller',ex);
        }
        
    }
    const findADHOCReportsCaller = async (body) => {
        try {
            return await findADHocReports(body);
        }catch(ex){
            console.log('Exception in getADHOCReportsCaller',ex);
        }
    }

module.exports ={
    findVisitorsCaller,
    findADHOCReportsCaller
}