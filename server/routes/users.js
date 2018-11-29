import express from 'express';

const userController = require('../controllers/userController');

const router = express.Router();

// GET
router.get('/', userController.getAllUsers);
router.get('/:userID', userController.getUserInfo);

// POST
router.post('/', userController.createUser);
// Delete user
router.delete('/:userID', userController.deleteUser);
// Put
router.put('/:userID', userController.updateUser);

export default router;
