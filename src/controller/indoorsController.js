const game = require('../Models/Games')

class indoorsController{
    async indoors(req,res,next){
        let games = await game.find({type: 'indoors'})
        games = games.map(game => game.toObject())
        res.render('indoors', {games})
    }
    show(req,res,next){
        game.findOne({slug: req.params.slug})
            .then(games => {
                res.render('games_detail',{games : games.toObject()}) 
            })
            .catch(next)
    }
    
    async category(req,res,next){
        const games = (await game.find({type: 'indoors',category: req.params.category})).map(game => game.toObject())
        res.render('indoors', {games})
    }
}

module.exports = new indoorsController
 
