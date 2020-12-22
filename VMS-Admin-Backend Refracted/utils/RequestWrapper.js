


const createFacilityObject = (body) => {
    const date = new Date();
    const newBody = {
        facility_name: body.facilityName,
        facility_st_addr: body.facilityAddress,
        facility_city: body.facilityCity,
        facility_state: body.facilityState,
        facility_zip: body.facilityZip,
        facility_country: body.facilityCountry,
        facility_nda_required: body.facilityNDA,
        nda_nda_id: 1,
        facility_created_ts: date,
        facility_updated_ts: date,
        is_active: 1
    }
    return newBody;
}

const deleteObject = () => {
    return  {
        is_active: 0
    };    
}

const createKioskBody = (body, count) => {
    const date = new Date();
    const newBody = {
        kiosk_name: body.facility_name + '_Kiosk_' + count,
        facility_code: body.facility_code,
        kiosk_created_ts: date,
        is_active: 1
    }
    return newBody;
}

const createPrinterBody = ({ body }) => {
    const date = new Date();
    const newBody = {
        printer_dhcp_name: body.printer_dhcp_name,
        printer_created_ts: date,
        is_active: 1,
        facility_facility_code: parseInt(body.facility_facility_code)
    }
    return newBody;
}

module.exports = {
    createFacilityObject,
    deleteObject,
    createKioskBody,
    createPrinterBody
}