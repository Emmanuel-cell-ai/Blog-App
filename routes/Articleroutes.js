const express = require('express');
const router = express.Router();

const {
    PostArticle , 
    getArticles, 
    getArticleById, 
    updateArticle, 
    deleteArticle} = require('../controllers/articleController.js');


router.get('/', getArticles);
router.post('/article', PostArticle);
router.get('/article/:id', getArticleById);
router.put('/article/:id', updateArticle);
router.delete('/article/:id', deleteArticle);

module.exports = router;
