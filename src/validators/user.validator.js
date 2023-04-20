import Joi from "joi";

import {regexp} from "../configs";


const userValidator = Joi.object({
    name: Joi.string().regex(regexp.NAME).required().messages({
        'string.pattern.base': 'Invalid characters or less than two letter entered',
        'string.empty': 'Name must not be empty',
    }),
    email: Joi.string().regex(regexp.EMAIL).required().messages({
        'string.pattern.base': 'Invalid email',
        'string.empty': 'E-mail must not be empty',
    }),
    age: Joi.number().min(1).less(101).required().messages({
        'number.base': 'Invalid age',
        'number.min': 'Age must be more than 0',
        'number.less': 'Age must be less than or equal to 100',
        'number.empty': 'Age must not be empty',
    }),
});

export {userValidator};
