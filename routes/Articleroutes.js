const express = require('express');
const router = express.Router();

const {PostArticle , getArticles, getArticleById, updateArticle, deleteArticle} = require('../controllers/articleCOntroller');


router.post('/article', PostArticle());
router.get('/articles', getArticles() );
router.get('/article/:id', getArticleById());
router.put('/article/:id', updateArticle());
router.delete('/article/:id', deleteArticle());

module.exports = router;
