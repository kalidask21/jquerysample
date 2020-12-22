'use strict';


const bodyParser = require('body-parser');
const multer = require('multer'); // v1.0.5
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const FacilityController = require('../controllers/FacilityController');
const KioskController = require('../controllers/KioskController');
const PrinterController = require('../controllers/PrinterController');
const ReportingController = require('../controllers/ReportingController');
const LiveVisitFeedController = require('../controllers/LiveVisitFeedController');

module.exports = function(app){
    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({
        extended: true
    })); // for parsing application/x-www-form-urlencoded

    app.use(logger('dev'));
    app.use(cookieParser());

    let corsOptions = {
    origin: '*', 
    methods: ['GET', 'POST', 'PUT'], 
    allowedHeaders: 'Content-Type'
    };
    app.use(cors(corsOptions));
    // APP routes below :

    app.use('/facility',FacilityController);
    app.use('/kiosk',KioskController);
    app.use('/printer',PrinterController);
    app.use('/livevisitorfeed',LiveVisitFeedController);
    app.use('/reporting',ReportingController);

};