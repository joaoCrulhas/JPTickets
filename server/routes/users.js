import express from 'express';

const userController = require('../controllers/userController');

const router = express.Router();

// GET
router.get('/', userController.getAllUsers);
// POST
router.post('/', userController.createUser);
// Delete user
router.delete('/:userID', userController.deleteUser);

export default router;
