const Sequelize = require('sequelize');
const sequelize = require('../services/dbConnection');

const PRE_REG_VISITS_SCHEMA  = sequelize.define('pre_reg_visits', {
    pre_reg_visit_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    host_name: Sequelize.STRING,
    host_email_add: Sequelize.STRING,
    visit_start_ts: Sequelize.DATE,
    visit_end_ts: Sequelize.DATE,
    visit_location: Sequelize.STRING,
    visit_subject: Sequelize.STRING,
    outlook_meeting_id: Sequelize.STRING
},{
    timestamps: false,
    tableName: 'pre_reg_visits',
    freezeTableName: true
});

module.exports = {
    PRE_REG_VISITS_SCHEMA
}
