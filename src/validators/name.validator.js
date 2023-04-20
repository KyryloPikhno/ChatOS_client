import Joi from "joi";

import {regexp} from "../configs";


const nameValidator = Joi.object({
    name: Joi.string().regex(regexp.NAME).required().messages({
        'string.pattern.base': 'Invalid characters or less than two letter entered',
        'string.empty': 'Name must not be empty',
    })
});

export {nameValidator};
