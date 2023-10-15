import Joi from "joi";

export const notesValidation = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().optional()
})