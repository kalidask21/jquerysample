const Sequelize = require('sequelize');
const sequelize = require('../services/dbConnection');

const PRE_REG_VISITORS_SCHEMA = sequelize.define('pre_reg_visitors', {
    pre_reg_visitors_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pre_reg_visits_pre_reg_visit_id: Sequelize.INTEGER,
    visitor_profile_visitor_id: Sequelize.INTEGER
}, {
    timestamps: false,
    tableName: 'pre_reg_visitors',
    freezeTableName: true
});
module.exports = {
    PRE_REG_VISITORS_SCHEMA
}