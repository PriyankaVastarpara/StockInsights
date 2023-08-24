// routes/vendorRoutes.js

const express = require('express');
const vendorController = require('../controllers/vendorController');
const router = express.Router();

router.post('/create',vendorController.createVendor);
router.get('/getall', vendorController.getVendors);
router.get('/:id', vendorController.getVendorById);
router.put('/:id', vendorController.updateVendorById);
router.delete('/:id', vendorController.deleteVendorById);
router.get('/city/:city', vendorController.getByCity);

module.exports = router;
