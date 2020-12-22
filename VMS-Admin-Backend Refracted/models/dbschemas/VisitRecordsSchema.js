

const Sequelize = require('sequelize');
const sequelize = require('../services/dbConnection');
const moment = require('moment');


const VISIT_RECORD_BY_TIMEZONE = (timeZone) =>{
    return {
        visit_id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        visit_checkin_ts: {
            type : Sequelize.DATE,
            get : function(){
                if(!this.getDataValue('visit_checkin_ts')){
                    return null;
                }
                const changedVal = moment(this.getDataValue('visit_checkin_ts')).tz(timeZone).format();
                return changedVal;
            }
        },
        visit_checkout_ts: {
            type : Sequelize.DATE,
            get : function(){
                if(!this.getDataValue('visit_checkout_ts')){
                    return null;
                }
                const changedVal = moment(this.getDataValue('visit_checkout_ts')).tz(timeZone).format();
                return changedVal;
            }
        },
        spcl_escort_rqrd_ind: Sequelize.CHAR,
        checkin_kiosk_name: Sequelize.TEXT,
        checkout_kiosk_name: Sequelize.TEXT,
        visited_host_fname: Sequelize.STRING,
        visited_host_lname: Sequelize.STRING,
        sys_checkout_ind: Sequelize.CHAR,
        visitor_profile_visitor_id: Sequelize.INTEGER,
        facility_facility_code: Sequelize.INTEGER
    }
}

const VISIT_RECORD_BY_UTC = () =>{
    return {
        visit_id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        visit_checkin_ts: {
            type : Sequelize.DATE,
        },
        visit_checkout_ts: {
            type : Sequelize.DATE,
        },
        spcl_escort_rqrd_ind: Sequelize.CHAR,
        checkin_kiosk_name: Sequelize.TEXT,
        checkout_kiosk_name: Sequelize.TEXT,
        visited_host_fname: Sequelize.STRING,
        visited_host_lname: Sequelize.STRING,
        sys_checkout_ind: Sequelize.CHAR,
        visitor_profile_visitor_id: Sequelize.INTEGER,
        facility_facility_code: Sequelize.INTEGER
    }
}

const TABLE_INFO = () =>{
    return {
        timestamps: false,
        tableName: 'visit_records',
        freezeTableName: true
    };
}

module.exports = { VISIT_RECORD_BY_TIMEZONE, VISIT_RECORD_BY_UTC,TABLE_INFO };