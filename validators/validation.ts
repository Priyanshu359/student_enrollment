import Joi from "joi";

export const StudentSchema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().min(3).required(),
});

export const CourseSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
});