const express = require('express')
const router = express.Router()

const outdoorsController = require('../controller/outdoorsController')

router.get('/:category', outdoorsController.category)
router.get('/game/:slug', outdoorsController.show)

router.get('/', outdoorsController.outdoors)

module.exports = router