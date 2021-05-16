const express = require('express')
const router = express.Router()

const meController = require('../controller/meController')

router.get('/stored/games', meController.storedGame)
router.get('/trash/games', meController.trashGame)
router.get('/order-stored',meController.storedOrder)
router.get('/trash/order', meController.trashOrder)
router.get('/:id/editOrder',meController.editOrder)
router.put('/:id', meController.updateOrder)
router.patch('/:id/restore', meController.restoreOrder)
router.delete('/:id/destroy',meController.destroyOrder)
router.delete('/:id', meController.deleteOrder)
router.get('/:id/editUser',meController.editUser)
router.get('/trash/user', meController.trashUser)
router.get('/user-stored',meController.storedUser)


module.exports = router