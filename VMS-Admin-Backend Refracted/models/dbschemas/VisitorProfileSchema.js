const Sequelize = require('sequelize');
const sequelize = require('../services/dbConnection');

const VISITOR_PROFILE = sequelize.define('visitor_profile', {
    visitor_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    visitor_email_add: Sequelize.STRING,
    submit_date: Sequelize.DATE,
    visitor_fname: Sequelize.TEXT,
    visitor_lname: Sequelize.TEXT,
    visitor_company_name: Sequelize.TEXT,
    visitor_phone: Sequelize.STRING,
    visitor_flag_txt_visitor_flag_id: Sequelize.CHAR
},
    {
        timestamps: false,
        tableName: 'visitor_profile',
        freezeTableName: true
    });


module.exports = { VISITOR_PROFILE };