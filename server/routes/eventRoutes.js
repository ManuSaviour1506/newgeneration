 
const express = require('express');
const router = express.Router();
const { getEvents, createEvent, deleteEvent } = require('../controllers/eventController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
    .get(getEvents)
    .post(protect, createEvent);

router.delete('/:id', protect, deleteEvent);

module.exports = router;