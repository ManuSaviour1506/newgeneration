const express = require('express');
const router = express.Router();
const { getFieldTrips, createFieldTrip, deleteFieldTrip } = require('../controllers/fieldTripController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
    .get(getFieldTrips)      // Public can view
    .post(protect, createFieldTrip); // Private can create

router.route('/:id')
    .delete(protect, deleteFieldTrip); // Private can delete

module.exports = router;