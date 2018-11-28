import express from 'express';

const userController = require('../controllers/userController');

const router = express.Router();

// GET
router.get('/', userController.index);

// POST
router.post('/', userController.createUser);


export default router;
