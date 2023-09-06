// routes/customerRoutes.js

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/create',userController.createUser);
router.get('/getall', userController.getUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUserById);
router.delete('/:id', userController.deleteUserById);

module.exports = router;
