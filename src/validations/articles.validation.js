const Joi = require('joi');

const articleSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    content: Joi.string().min(10).required()
});

const editArticleSchema = Joi.object({
    title: Joi.string().min(3).max(100),
    content: Joi.string().min(10),
})


module.exports = {articleSchema, editArticleSchema};

