const userModal = require('../Models/user')

class userController{
    async logIn(req,res,next){
        res.render('./user/log-in')
    }

    async logInCheck(req,res,next){
        const user = await userModal.findOne({username: req.body.username})
            if (!user || user.password !== req.body.password){

            res.redirect('/user/log-in')
        }
        res.redirect('/')
    }

    async register(req,res,next){
        res.render('./user/register')
    }

    
    async storedUser(req,res,next){
        const data = req.body
        const user = new userModal(data)
        const newUser = await user.save()
    }

    async updateUser(req,res,next){
        await userModal.updateOne({_id: req.params.id}, req.body)
        res.redirect('/me/user-stored')
    }

    async deleteUser(req, res, next) {
        await userModal.delete({ _id: req.params.id })
        res.redirect('back')
    }
    async restoreUser(req,res,next){
        await userModal.restore({_id: req.params.id})
        res.redirect('back')
    }

    async destroyUser(req,res,next){
        await userModal.deleteOne({_id: req.params.id})
        res.redirect('back')
    }
}

module.exports = new userController