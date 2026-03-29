const express = require('express');
const router = express.Router();

const {
    PostArticle , 
    getArticles, 
    getArticleById, 
    updateArticle, 
    deleteArticle,
    searchArticles} = require('../controllers/articleController.js');   
const  requireAuth  = require('../middlewares/requireAuth.js');


router.get('/', requireAuth, getArticles);
router.post('/article', requireAuth, PostArticle);
router.get('/article/:id', requireAuth, getArticleById);
router.get('/search', requireAuth, searchArticles);
router.put('/article/:id', requireAuth, updateArticle);
router.delete('/article/:id', requireAuth, deleteArticle);

module.exports = router;
