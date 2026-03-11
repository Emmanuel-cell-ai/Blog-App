const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 5},
    content: {type: String, required: true, minlength: 20},
    author: {type: String, minlength: 3, default: 'Guest'},
     
}, {timestamps: true});

const Article =  mongoose.model('Article', ArticleSchema);


module.exports = Article;
