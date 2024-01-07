const Joi = require("joi")

exports.validCreateUser = (userBody) => {
    const signUpSchema =
        Joi.object().keys({
            name: Joi.string().required(),
            userName: Joi.string().required(),
            phone: Joi.string().required(),
            password: Joi.string()
                // .max(20).required(),
                .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/)
                .required()
                .messages({
                    'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, and one number.'
                }),
            email: Joi.string().email({ tlds: { allow: ['com', 'net', 'org'] } }).error(() => Error('Email is not valid')).required(),
            contact: Joi.string(),
            profileImage: Joi.string()
        })
    return signUpSchema.validate(userBody);
}

exports.validLogIn = (userBody) => {
    const logInSchema =
        Joi.object().keys({
            password: Joi.string(),
            email: Joi.string().email({ tlds: { allow: ['com', 'net', 'org'] } }).error(() => Error('Email is not valid')),
        })
    return logInSchema.validate(userBody)
}
