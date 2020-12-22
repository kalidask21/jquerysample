const ErrorResponse = ({statusCode,message,data}, res) =>{
     res.status(statusCode);
     return res.json({
        message,
        data
    });
}

const SuccessResponse = ({statusCode,message,data}, res) =>{
    res.status(statusCode);
    return res.json({
        message,
        data
    });
}

const ReturnObject = (statusCode,message,respData) =>{
    return {
        statusCode,
        message,
        data : respData
    };
}

module.exports = {
    ErrorResponse,
    SuccessResponse,
    ReturnObject
}