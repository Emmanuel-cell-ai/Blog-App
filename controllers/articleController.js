const Joi =  require('joi');
const Article = require('../models/models.js');

const PostArticle = async (req, res, next) => {
    const articleSchema = Joi.object({
        title: Joi.string().min(3).max(100).required(),
        content: Joi.string().min(10).required(),
        author: Joi.string().min(3).max(50).required(),
    });

    const {error, value} = articleSchema.validate(req.body);
    if (error){
        return res.status(400).json({error: error.details[0].message});
    }

    try{
        const newArticle = new Article({value})
        await newArticle.save()
        return res.status(201).json({message: 'Articlae posted successfully', 
            article: newArticle,
        })
    }catch(err){
        return res.status(500).json({error: 'Failed to create article'})
    }
}

const getArticles = async (req, res, next) => {
    try{
        const articles = await Article.find({});
        return res.status(200).json({articles})

    }catch(err){
        next(err)
    }
}

const getArticleById = async (req, res, next) => {
    try{
        const article = await Article.findById(req.params.id);
        if (!article){
            return res.status(404).json({error: 'Article not found'})
        }
        return res.status(200).json({message: 'Article found', data: article})
    }catch(err){
        next(err)
    }
    
}

const updateArticle = async(req, res, next)=> {
    const articleSchema =  Joi.object({
        title: Joi.string().min(3).max(100),
        content: Joi.string().min(10),
        author: Joi.string().min(4).max(50)
    })

    const {error, value} = articleSchema.validate(req.body);
    if (error){
        return res.status(400).json({error: error.details[0].message})
    }

    try{
        const updatedArticle = await Article.findByIdAndUpdate(req.params.id, ...value, {new: true})
        if(!updatedArticle){
            return res.status(404).json({error: 'Article not found'})
        }
        return res.status(200).json({message: 'Article updated successfully', 
            data: updatedArticle })
    }catch(err){
        next(err)
    }
}

const deleteArticle = async (req, res, next) => {
    try{ 
        const deletedArticle = await Article.findByIdAndDelete(req.params.id);
        if (!deletedArticle){
            return res.status(404).json({error: 'Article not found'})
        }
        return res.status(200).json({message: ' Article deleted successfully'})
    }catch(err){
        next(err)

    }
}

module.exports = {
    PostArticle,
    getArticles,        
    getArticleById,
    updateArticle,
    deleteArticle
}
