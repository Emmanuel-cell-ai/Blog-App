const Joi = require('joi');

const articleSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    content: Joi.string().min(10).required(),
    author: Joi.string().min(4).max(50)
});

const editArticleSchema = Joi.object({
    title: Joi.string().min(3).max(100),
    content: Joi.string().min(10),
    author: Joi.string().min(4).max(50)
})


module.exports = {articleSchema, editArticleSchema};

