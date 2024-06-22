import Joi from "joi";

export const inputPostSchema = Joi.object({
    id: Joi.string(),
    title: Joi.string().required().min(5).max(30),
    content: Joi.string(),
    tags: Joi.array()
});