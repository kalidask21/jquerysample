const Sequelize = require('sequelize');
const sequelize = require('../services/dbConnection');

const FACILITY = sequelize.define('facility', {
    facility_code: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    facility_name: Sequelize.TEXT,
    facility_st_addr: Sequelize.TEXT,
    facility_city: Sequelize.TEXT,
    facility_state: Sequelize.TEXT,
    facility_zip: Sequelize.TEXT,
    facility_country: Sequelize.TEXT,
    facility_nda_required: Sequelize.BOOLEAN,
    nda_nda_id:Sequelize.INTEGER ,
    facility_created_ts: Sequelize.DATE,
    facility_updated_ts:Sequelize.DATE,
    is_active:Sequelize.INTEGER
}, {
    timestamps: false,
    tableName: 'facility',
    freezeTableName: true
});

const CREATE_FACILITY = sequelize.define('facility', {
    facility_code: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    facility_name: Sequelize.TEXT,
    facility_st_addr: Sequelize.TEXT,
    facility_city: Sequelize.TEXT,
    facility_state: Sequelize.TEXT,
    facility_zip: Sequelize.TEXT,
    facility_country: Sequelize.TEXT,
    facility_nda_required: Sequelize.BOOLEAN,
    nda_nda_id: Sequelize.INTEGER,
    facility_created_ts: Sequelize.DATE,
    facility_updated_ts:Sequelize.DATE,
    is_active:Sequelize.INTEGER
}, {
    timestamps: false,
    tableName: 'facility',
    freezeTableName: true
});
const DELETE_FACILITY = sequelize.define('facility', {
    is_active:Sequelize.INTEGER
}, {
    timestamps: false,
    tableName: 'facility',
    freezeTableName: true
});

const LOCATIONS = sequelize.define('facility', {
    facility_code: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    facility_city: { 
        field : 'facility_city',
        unique :'facility_city',
        type :Sequelize.TEXT,
        validate : {
            unique : 'facility_city'
        }
        
    },
    facility_state: { 
        field : 'facility_state',
        unique :'facility_state',
        type :Sequelize.TEXT 
    },
    facility_country: { 
        field : 'facility_country',
        unique :'facility_country',
        type :Sequelize.TEXT 
    },
    facility_name: { 
        field : 'facility_name',
        unique :'facility_name',
        type :Sequelize.TEXT ,
        validate: { 
            unique :'facility_name'
        }
    }
},

{
    timestamps: false,
    tableName: 'facility',
    freezeTableName: true
});


module.exports = {FACILITY,CREATE_FACILITY,DELETE_FACILITY,LOCATIONS};