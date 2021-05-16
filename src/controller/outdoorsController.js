const game = require('../Models/Games')

class outdoorsController{
    async outdoors(req,res,next){
        game.find({type: 'outdoors' })
        .then(games => {
            games = games.map(game => game.toObject())
            res.render('outdoors', {games})
        })
        .catch(error => next(err))
    }

    show(req,res,next){
        game.findOne({slug: req.params.slug})
            .then (games => {
                res.render('games_detail',{games : games.toObject()})
            })
            .catch(next)
    }

    async category(req,res,next){
        const games = (await game.find({type: 'outdoors', category: req.params.category})).map(game => game.toObject())
        res.render('outdoors',{games})
    }
}

module.exports = new outdoorsController