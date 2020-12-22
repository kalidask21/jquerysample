const Sequelize = require('sequelize');
const sequelize = require('../services/dbConnection');

const KIOSK = sequelize.define('kiosk', {
    kiosk_reg_code: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    kiosk_name: Sequelize.TEXT,
    facility_code: Sequelize.INTEGER,
    kiosk_created_ts: Sequelize.DATE,
    is_active:Sequelize.INTEGER
}, {
    timestamps: false,
    tableName: 'kiosk',
    freezeTableName: true
});
const CREATE_KIOSK = sequelize.define('kiosk', {
    kiosk_reg_code: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    kiosk_name: Sequelize.TEXT,
    facility_code: Sequelize.INTEGER,
    kiosk_created_ts: Sequelize.DATE,
    is_active:Sequelize.INTEGER
}, {
    timestamps: false,
    tableName: 'kiosk',
    freezeTableName: true
});

module.exports = {
    KIOSK,
    CREATE_KIOSK
}