const gameModel = require('../Models/Games')
const orderModel = require('../Models/Orders')
const billingModel = require('../Models/billings')

class orderController {

    async order(req, res, next) {
        let game = await gameModel.findById(req.params.id)
        res.render('./order/order', { game: game.toObject() })
    }

    async orderDetails(req, res, next) {
        const order = req.body.location[0] ? { ...req.body, location: req.body.location[0] } : { ...req.body, location: req.body.location[1] }
        res.render('./order/order-details', { order })

    }

    async orderStored(req,res,next){
        let data = req.body
        console.log(data)
        const game = await gameModel.findOne({ name: data.name })
        const orderDetail = new orderModel({ ...data, gameId: game })
        const order = await orderDetail.save()
        data = {...req.body, price: game.price, id: order._id}
        res.redirect(`http://localhost:3000/order/payment-details/${order._id}`)
    }

    async edit(req, res, next) {
        const order = req.body.location.includes(',') ? { ...req.body, location: req.body.location.split(',')[1] } : req.body
        console.log(order)
        const game = await gameModel.findOne({ name: order.name })
        res.render('./order/order-edit', { order, game: game.toObject() })
    }

    async paymentDetails(req, res, next) {
        const order = await orderModel.findById(req.params.id)
        const game = await gameModel.findById(order.gameId)
        const data = {
            name : game.name,
            price: game.price,
            number: order.number,
            totalPrice: order.totalPrice,
            id: order._id
        }
        res.render('./order/payment-details',{orders: data})
    }

    async billingStored(req,res,next){
        let data = req.body
        const order = await orderModel.findById(req.body.id)
        data = {...req.body, orderId : order}
        const billing = new billingModel(data)
        const bill =  await billing.save()
        res.redirect(`http://localhost:3000/order/check-out-success/${bill._id}`)
    }

    async checkOutSuccess(req,res,next){
        console.log(req.params.id)
        res.render('./order/checkOutSuccess', {billing: {id: req.params.id}})
    }

    async billDetails(req,res,next){
        const bill = await billingModel.findById(req.params.id)
        const order = await orderModel.findById(bill.orderId)
        const game = await gameModel.findById(order.gameId)
        const data = {
            name: bill.fullname,
            email: bill.email,
            name_game: game.name,
            price: game.price,
            number: order.number,
            totalPrice: order.totalPrice,
            id: bill._id
        }
        res.render('./order/bill-details',{bill: data})
    }

}
module.exports = new orderController
