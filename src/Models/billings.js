const mongoose = require("mongoose");
const { TRUE } = require("node-sass");

const Billings = new mongoose.Schema({
    fullname: {type: String, require: true},
    email:{type: String, require: true},
    address: {type: String,require: true},
    phone: {type: String,require: true},
    nameOnCard: {type: String,require: false},
    creditCardNumber: {type: String,require: false,unique:false},

    orderId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Orders',
        required: true
      },
},{
    timestamps : true
})

module.exports = mongoose.model('Billings', Billings)