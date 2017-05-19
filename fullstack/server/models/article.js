const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    url: String,
    description: String
    //liked: Number
});

// We export the model schema
module.exports = mongoose.model('article', articleSchema);

