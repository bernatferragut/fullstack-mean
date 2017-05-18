const express = require('express'); // the backend engine
const router = express.Router(); // first thing we need is a router
const mongoose = require('mongoose'); // allow to use MongoDB commands from our app
const article = require('../models/article'); // we import the model

const db = "mongodb://elbernat:1lovepyth0n@ds143151.mlab.com:43151/trumped-db";

mongoose.Promise = global.Promise; // mongoose works with promises to mongoDB
mongoose.connect(db, function(err) {
    if(err) {
        console.log('Connection error');
    }
});

// Getting info through mongoose of articles endpoint
router.get('/articles', function(req, res) {
        console.log('Requesting Artciles...');
        article.find({})
            .exec(function(err, articles){
                if(err){
                    console.log('Error getting the articles');
                } else {
                    res.json(articles);
                }
            });
}) 

// Getting info through mongoose of a single article endpoint
router.get('/details/:id', function(req, res) {
        console.log('Requesting Artcile by Id...');
        article.findById(req.params.id)
            .exec(function(err, article){
                if(err){
                    console.log('Error getting the article by Id');
                } else {
                    res.json(article);
                }
            });
}) 

module.exports = router;



