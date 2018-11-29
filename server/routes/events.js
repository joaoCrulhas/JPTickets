import express from 'express';

const eventController = require('../controllers/eventsController');

const router = express.Router();

// GET
router.get('/', eventController.getAllEvents);
router.get('/:eventID', eventController.getEventInfo);

// POST
router.post('/', eventController.createEvent);
// Delete user
router.delete('/:eventID', eventController.deleteEvent);
// Put
router.put('/:eventID', eventController.updateEvent);

export default router;
