const Game = require('../Models/Games');
const meRouter = require('./me')
const indoorsRouter = require('./indoors')
const outdoorsRouter = require('./outdoors')
const orderRouter = require('./order')
const userRouter = require('./user')
const gameRouter = require('./game')
const siteRouter = require('./site')


function route(app) {

  app.use('/indoors', indoorsRouter)
  app.use('/outdoors', outdoorsRouter)
  app.use('/order', orderRouter)
  app.use('/game', gameRouter)
  app.use('/user', userRouter)
  app.use('/me', meRouter)

  app.use('/', siteRouter)

}

module.exports = route
