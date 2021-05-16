const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');
const { TRUE } = require("node-sass");
const mongooseDelete = require('mongoose-delete')

const Games = new mongoose.Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
    content: {type: String,require: true},
    image: {type: String,require: true},
    slug: { type: String, slug: "name",unique:true },
    type: {type: String, require:true},
    category: {type: String, require:true},
    price: {type: String, require:true}
},{
    timestamps : true
})

//add plugin
mongoose.plugin(slug);
Games.plugin(mongooseDelete,{ deletedAt : true , overrideMethods: 'all'})

module.exports = mongoose.model('Games', Games)
