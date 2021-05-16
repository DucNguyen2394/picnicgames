const express = require('express')
const router = express.Router()

const indoorsController = require('../controller/indoorsController')

router.get('/:category', indoorsController.category)
router.get('/game/:slug', indoorsController.show)

router.get('/', indoorsController.indoors)

module.exports = router