const mongoose = require("mongoose");
const { TRUE } = require("node-sass");
const mongooseDelete = require('mongoose-delete')

const Orders = new mongoose.Schema({
  order_date: { type: Date, require: true },
  duration: { type: String, require: true },
  number: { type: Number, require: true },
  location: { type: [String], require: true },

  gameId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Games',
    required: true
  },
  totalPrice: {type: String,require: true}

}, {
  timestamps: true
})

Orders.plugin(mongooseDelete,{ deletedAt : true , overrideMethods: 'all'})

module.exports = mongoose.model('Orders', Orders)
