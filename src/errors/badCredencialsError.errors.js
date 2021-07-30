const BaseError = require('./baseError.errors');
const httpCodes = require('../httpStatusCodes');

class BadCredencialsError extends BaseError {
    constructor(name, errorCode = "03", statusCode = httpCodes.BAD_CREDENTIALS, description = 'Invalid Credentials') {
        super(name, errorCode, statusCode, description);

        this.save = false;
    }
}

module.exports = BadCredencialsError;