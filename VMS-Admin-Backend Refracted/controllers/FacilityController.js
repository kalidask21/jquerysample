

/**
 * FacilityController
 * @description :: controller for managing facilities
 */

const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const Facility = require('../models/Facility');
const Sequelize = require('sequelize');
const lodash = require('lodash');
const { ErrorResponse , SuccessResponse , ReturnObject } = require('../utils/ResponseWrapper');
const { getFacilitiesCaller, getFacilityCaller, updateFacilityCaller, createFacilityCaller , deleteFacilityCaller, locationsCaller } = require('../services/FacilityService');
const { createFacilityObject } = require('../utils/RequestWrapper');

/**
 * apis for Facility
 */
/**
    * List all facility, reads query params(page,limit,search,location) from req object
*/
router.get("/facilities",async (req, res) =>{
    const Op = Sequelize.Op
    let search = '';
    let page = 1;
    let limit = 10;
    let location = '';
    
    if (req.query != null) {
        page = parseInt(req.query.page || 1);
        limit = parseInt(req.query.limit || 10);
        search = req.query.search || '';
        location = req.query.location || ''
    }

    let [ state = '', country = '' ] = location.split(',').map(item => item.trim());

    const locationWhere = (state || country) ? {
        [Op.and]: {
            facility_state: {
                [Op.eq]: `${state}`
            },
            facility_country: {
                [Op.eq]: `${country}`
            }
        }
    } : {};

    /*
     search will be filtered on below fields on facility page
     For now, commented facility_code, will include after MVP.
     **/
    let where = Object.assign({}, {
        is_active: 1,
        [Op.or]: {
            // facility_code: {
            //     [Op.like]: `%${search.trim()}%`
            // },
            facility_name: {
                [Op.like]: `%${search.trim()}%`
            },
            facility_city: {
                [Op.like]: `%${search.trim()}%`
            },
            facility_state: {
                [Op.like]: `%${search.trim()}%`
            }
        }
    }, locationWhere);
    let offset = (page - 1) * limit;
    try{

        const totalRecords = await Facility.getFacility.count({
            where
        });
        const totalPages = Math.ceil(totalRecords / limit);

        const facilities = await Facility.getFacility.findAll({
            where,
            offset,
            limit,
            order: [
                ['facility_code', 'DESC'],
            ]
        })
        const data =  {
            facilities,
            currentPage: page,
            totalPages,
            totalRecords
        };
        const response = ReturnObject(200,'SuccessFully loaded',data);
        SuccessResponse(response,res);
    }catch(ex){
        console.log('Exception is  :',ex);
        const response = ReturnObject(400,'Load Failed', []);
        ErrorResponse(response,res);

    }
});
router.get("/:id", async (req, res) => {
    try{
        const facilityCode = req.params.id;
        const facility = getFacilityCaller(facilityCode);
        const response = ReturnObject(200,'SuccessFully created',facility);
        SuccessResponse(response,res);
    }catch(ex){
        console.log('Exception is  :',ex);
        const response = ReturnObject(400,'Load Failed', []);
        ErrorResponse(response,res);

    }
});
router.post("/create", upload.array(), async (req, res) =>{
    try{
         const newFacility = createFacilityBody(req.body);
         const createdFac = createFacilityCaller(newFacility);
         const response = ReturnObject(200,'SuccessFully created',createdFac);
         SuccessResponse(response,res);
    }catch(ex){
        console.log('Exception is  :',ex);
        const response = ReturnObject(400,'creation  Failed', []);
         ErrorResponse(response,res);

    }
});
router.put("/update", upload.array(), async (req, res) => {
    try{
        const facilityCode = req.params.id;
        const updatedFacility = createFacilityObject(req.body);
        const updatedFacilityResponse = updateFacilityCaller(updatedFacility,facilityCode);
        const response = ReturnObject(200,'SuccessFully updated',updatedFacilityResponse);
        SuccessResponse(response,res);
   }catch(ex){
        console.log('Exception is  :',ex);
        const response = ReturnObject(400,'update Failed',[]);
        ErrorResponse(response,res);

   }
});
router.put("/:id/delete", async (req, res) => {
    try{
        const facilityCode = req.params.id;
        const deletedObject = await deleteFacilityCaller(facilityCode);
        const response = ReturnObject(200,'SuccessFully Deleted',deletedObject);
        SuccessResponse(response,res);
   }catch(ex){
       console.log('Exception is  :',ex);
       const response = ReturnObject(400,'deletion Failed',[]);
       ErrorResponse(response,res);

   }
});

router.get("/locations", async (req, res) => {
    try{
         const locationsLoaded  = locationsCaller();
         const response = ReturnObject(200,'Locations',locationsLoaded);
         SuccessResponse(response,res);
    }catch(ex){
        console.log('Exception is  :',ex);
        const response = ReturnObject(400,'Location Load is Failed',[]);
        ErrorResponse(response);

    }
});

module.exports = router;



