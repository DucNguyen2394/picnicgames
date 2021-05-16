const game = require('../Models/Games')

class gameController{
    create(req,res,next){
        res.render('./game/create')
    }
    async stored(req,res,next){
        const data = {...req.body, type: req.body.type.toLowerCase()}
        const gameDetail = new game(data);
        await gameDetail.save()
        res.redirect(`http://localhost:3000/me/stored/games`)
    }

    edit(req,res,next){
        game.findById(req.params.id)
        .then(games =>{
            res.render('./game/edit',{games : games.toObject()})
        })
        .catch(next)
    }

    async update(req,res,next){
        await game.updateOne({_id: req.params.id}, req.body)
        res.redirect('/me/stored/games')
    }

    async delete(req,res,next){
        await game.delete({_id: req.params.id})
        res.redirect('back')
    }

    async restore(req,res,next){
        await game.restore({_id: req.params.id})
        res.redirect('back')
    }

    async destroy(req,res,next){
        await game.deleteOne({_id: req.params.id})
        res.redirect('back')
    }
}
module.exports = new gameController

