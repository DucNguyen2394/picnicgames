const express = require('express')
const router = express.Router()

const orderController = require('../controller/orderController')

router.post('/order-details', orderController.orderDetails)
router.get('/check-out-success/:id', orderController.checkOutSuccess)
router.post('/billing-stored', orderController.billingStored)
router.get('/bill-details/:id', orderController.billDetails)
router.post('/edit',orderController.edit)
router.get('/payment-details/:id',orderController.paymentDetails)
router.post('/order-stored',orderController.orderStored)
router.get('/:id', orderController.order)

module.exports = router
