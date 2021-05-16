const mongoose = require("mongoose");
const { TRUE } = require("node-sass");
const mongooseDelete = require('mongoose-delete')

const User = new mongoose.Schema({
    username: {type: String, require: true},
    email: {type: String,require: true, unique: false},
    password: {type: String,require: true},
    phone: {type: String,require: true},
    address: {type: String,require: true}
},{
    timestamps : true
})

//add plugin
User.plugin(mongooseDelete,{ deletedAt : true , overrideMethods: 'all'})

module.exports = mongoose.model('User', User)