

'use strict'; 

const Sequelize = require('sequelize');
const sequelize = require('../services/dbConnection');

const TIMEZONE = sequelize.define('vms_timezone', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    country: Sequelize.TEXT,
    state: Sequelize.TEXT,
    timezone: Sequelize.TEXT,
}, {
    timestamps: false,
    tableName: 'vms_timezone',
    freezeTableName: true
});

module.exports = { TIMEZONE };
