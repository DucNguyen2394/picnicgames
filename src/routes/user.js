const express = require('express')
const router = express.Router()

const userController = require('../controller/userController')

router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)
router.patch('/:id/restore', userController.restoreUser)
router.delete('/:id/destroy', userController.destroyUser)
router.get('/log-in', userController.logIn)
router.post('/check-log-in',userController.logInCheck)
router.get('/register', userController.register)
router.post('/storedUser',userController.storedUser)

module.exports = router