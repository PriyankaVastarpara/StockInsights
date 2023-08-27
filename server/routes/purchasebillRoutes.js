// routes/purchasebillRoutes.js

const express = require('express');
const purchasebillController = require('../controllers/purchasebillController');

const router = express.Router();

router.post('/create',  purchasebillController.createPurchaseBill);
router.get('/getall', purchasebillController.getPurchaseBills);
router.get('/:id', purchasebillController.getPurchaseBillById);
router.put('/:id',  purchasebillController.updatePurchaseBillById);
router.delete('/:id', purchasebillController.deletePurchaseBillById);

module.exports = router;