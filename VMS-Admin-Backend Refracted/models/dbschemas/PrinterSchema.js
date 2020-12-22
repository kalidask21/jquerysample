const Sequelize = require('sequelize');
const sequelize = require('../services/dbConnection');

const PRINTER = sequelize.define('printer', {
    printer_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    printer_dhcp_name: Sequelize.TEXT,
    printer_created_ts: Sequelize.DATE,
    is_active: Sequelize.INTEGER,
    facility_facility_code: Sequelize.INTEGER
}, {
    timestamps: false,
    tableName: 'printer',
    freezeTableName: true
});
const CREATE_PRINTER = sequelize.define('printer', {
    printer_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    printer_dhcp_name: Sequelize.TEXT,
    printer_created_ts: Sequelize.DATE,
    is_active:Sequelize.INTEGER,
    facility_facility_code: Sequelize.INTEGER
}, {
    timestamps: false,
    tableName: 'printer',
    freezeTableName: true
});

module.exports ={ PRINTER,CREATE_PRINTER};