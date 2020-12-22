const { VISITOR_PROFILE } = require('./dbschemas/VisitorProfileSchema');

const getProfiles = async (firstname, lastname, emailadd, companyname) => {
    const whereClause = ValidatorUtils.constructWhereClauseForSearchVisitor(firstname, lastname, emailadd, companyname);
    return await VISITOR_PROFILE.findAll({
        where: whereClause
    })
}

module.exports = {
    getProfiles,
}