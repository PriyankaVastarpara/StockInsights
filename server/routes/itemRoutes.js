// routes/customerRoutes.js

const express = require('express');
const itemController = require('../controllers/itemController');
const router = express.Router();

router.post('/create',itemController.createItem);
router.get('/getall', itemController.getItem);
router.get('/:id', itemController.getItemById);
router.put('/:id', itemController.updateItemById);  
router.delete('/:id', itemController.deleteItemById);

router.put("/:id",itemController.updateQuantity);  
   
  
module.exports = router;
