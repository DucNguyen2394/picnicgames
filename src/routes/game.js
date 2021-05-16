const express = require('express')
const router = express.Router()

const gameController = require('../controller/gameController')

router.get('/create', gameController.create)
router.post('/store', gameController.stored)
router.put('/:id', gameController.update)
router.delete('/:id', gameController.delete)
router.patch('/:id/restore', gameController.restore)
router.delete('/:id/destroy', gameController.destroy)
router.get('/:id/edit',gameController.edit)

module.exports = router