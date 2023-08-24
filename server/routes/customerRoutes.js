// routes/customerRoutes.js

const express = require('express');
const customerController = require('../controllers/customerController');
// const { createCustomer, updateCustomer } = require('../validators/customerValidator');

const router = express.Router();

router.post('/create',customerController.createCustomer);
router.get('/getall', customerController.getCustomers);
router.get('/:id', customerController.getCustomerById);
router.put('/:id', customerController.updateCustomerById);
router.delete('/:id', customerController.deleteCustomerById);
router.get('/city/:city', customerController.getByCity);
//router.post('/city', customerController.getByCity)

module.exports = router;
