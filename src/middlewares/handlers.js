const debug = require("debug")("app:error");
const ApiResponse = require("../responses/ApiResponse");
const errorService = require("../services").errorService;

const handlers = {};

handlers.errorHandler = (error, req, res, next) => {
    //debug(error);
    console.log(error);

    if (!error.statusCode) {
        return res.status(500).json(ApiResponse(false, "Unhandled error", error));
    }

    if (error.name === "MongoError") {
        return res.status(500).json(ApiResponse(false, "Database Error", error.code));
    }

    if (error.save) errorService.save(error.errorCode, error.name, error.statusCode);

    return res.status(error.statusCode).json(ApiResponse(false, "Error", error));

};


module.exports = handlers;
