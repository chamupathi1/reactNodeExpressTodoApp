const Joi = require('joi');
const boom = require('boom');


module.exports.validateAddTask = (req, res, next) => {

    let bodySchema = Joi.object({
        content: Joi.string().required(),
    }).unknown();

    Joi.validate(req.body, bodySchema, (err, value) => {

        if (err) {
            next(boom.badRequest(err, {}));
        } else {
            next();
        }
    }
    );
}


module.exports.validateGetAllTasks = (req, res, next) => {

    let bodySchema = Joi.object({}).unknown();

    Joi.validate(req.params, bodySchema, (err, value) => {

        if (err) {
            next(boom.badRequest(err, {}));
        } else {
            next();
        }
    }
    );
}

module.exports.validateGetComletedTasks = (req, res, next) => {

    let bodySchema = Joi.object({

    }).unknown();

    Joi.validate(req.params, bodySchema, (err, value) => {

        if (err) {
            next(boom.badRequest(err, {}));
        } else {
            next();
        }
    }
    );
}

module.exports.validateGetActiveTasks = (req, res, next) => {

    let bodySchema = Joi.object({

    }).unknown();

    Joi.validate(req.params, bodySchema, (err, value) => {

        if (err) {
            next(boom.badRequest(err, {}));
        } else {
            next();
        }
    }
    );
}

// TODO add validation for string id
// Argument passed in must be a single String of 12 bytes or a string of 24 hex characters
module.exports.validateCompleteTask = async (req, res, next) => {

    let bodySchema = Joi.object({
        id: Joi.string().required(),
    }).unknown();

    Joi.validate(req.body, bodySchema, (err, value) => {

        if (err) {
            next(boom.badRequest(err, {}));
        } else {
            next();
        }
    }
    );
}

// TODO add validation for string id
// Argument passed in must be a single String of 12 bytes or a string of 24 hex characters
module.exports.validateActivateTask = async (req, res, next) => {

    let bodySchema = Joi.object({
        id: Joi.string().required(),
    }).unknown();

    Joi.validate(req.body, bodySchema, (err, value) => {

        if (err) {
            next(boom.badRequest(err, {}));
        } else {
            next();
        }
    }
    );
}

module.exports.validateMakeAllActive = async (req, res, next) => {

    let bodySchema = Joi.object({
    }).unknown();

    Joi.validate(req.body, bodySchema, (err, value) => {

        if (err) {
            next(boom.badRequest(err, {}));
        } else {
            next();
        }
    }
    );
}

module.exports.validateMakeAllComplete = async (req, res, next) => {

    let bodySchema = Joi.object({
    }).unknown();

    Joi.validate(req.body, bodySchema, (err, value) => {

        if (err) {
            next(boom.badRequest(err, {}));
        } else {
            next();
        }
    }
    );
}
