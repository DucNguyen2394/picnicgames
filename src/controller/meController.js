const game = require('../Models/Games')
const orderModal = require('../Models/Orders')
const userModal = require('../Models/user')

class mecontroller {
    // me/stored/games
    storedGame(req, res, next) {
        game.find({})
            .then(games => {
                games = games.map(game => game.toObject())
                res.render('./me/stored-game', { games })
            })
            .catch(next)
    }

    trashGame(req, res, next) {
        game.findDeleted({})
            .then(games => {
                games = games.map(game => game.toObject())
                res.render('./me/trash-game', { games })
            })
            .catch(next)
    }

    async storedOrder(req, res, next) {
        const orders = await orderModal.find({})
        const dataPromise = orders.map(async order => {
            const gameEl = await game.findById(order.gameId)
            return { ...order._doc, gameName: gameEl.name }
        })

        let data = await Promise.allSettled(dataPromise)
        data = data.map(el => el.value)
        res.render('./me/order-stored', { orders: data })
    }

    async trashOrder(req, res, next) {
        const orders = await orderModal.findDeleted({})
        const dataPromise = orders.map(async order => {
            const gameEl = await game.findById(order.gameId)
            return { ...order._doc, gameName: gameEl.name }
        })
        let data = await Promise.allSettled(dataPromise)
        data = data.map(el => el.value)
        res.render('./me/trash-order', { orders: data })
    }

    editOrder(req, res, next) {
        orderModal.findById(req.params.id)
            .then(orders => {
                res.render('./me/order-edit', { orders: orders.toObject() })
            })
            .catch(next)
    }

    async updateOrder(req, res, next) {
        const order = await orderModal.findById(req.params.id)
        const number = order.number
        const data = req.body

        if (data.number < number) {
            order.totalPrice = order.totalPrice - (5 * data.number)
        }
        if (data.number > number) {
            order.totalPrice = order.totalPrice + (5 * data.number)
        }
        await orderModal.updateOne({ _id: req.params.id }, req.body)
        res.redirect('/me/order-stored')
    }

    async deleteOrder(req, res, next) {
        let order = await orderModal.delete({ _id: req.params.id })
        res.redirect('back')
    }

    async restoreOrder(req, res, next) {
        await orderModal.restore({ _id: req.params.id })
        res.redirect('back')
    }

    async destroyOrder(req, res, next) {
        await orderModal.deleteOne({ _id: req.params.id })
        res.redirect('back')
    }

    storedUser(req,res,next){
        userModal.find({})
            .then(users => {
                users = users.map(user => user.toObject())
                res.render('./me/user-stored',{users})
            })
            .catch(next)
    }

    //update user
    editUser(req,res,next){
        userModal.findById(req.params.id)
            .then(users => {
                res.render('./me/user-edit', { users: users.toObject() })
            })
            .catch(next)
    }

    trashUser(req, res, next) {
        userModal.findDeleted({})
            .then(users => {
                users = users.map(user =>  user.toObject())
                console.log(users)
                res.render('./me/trash-user', { users })
            })
            .catch(next)
    }

}
module.exports = new mecontroller