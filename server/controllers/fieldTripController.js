const FieldTrip = require('../models/fieldTripModel');

// @desc    Get all field trip images
// @route   GET /api/field-trips
// @access  Public
const getFieldTrips = async (req, res) => {
    try {
        const fieldTrips = await FieldTrip.find({}).sort({ date: -1 });
        res.status(200).json(fieldTrips);
    } catch (error) {
        res.status(500).json({ message: 'Server error while fetching field trips.' });
    }
};

// @desc    Add a new field trip
// @route   POST /api/field-trips
// @access  Private (Admin only)
const createFieldTrip = async (req, res) => {
    const { title, description, imageUrl, tripDate } = req.body;
    
    if (!title || !description || !imageUrl || !tripDate) {
        return res.status(400).json({ message: 'Please provide a title, description, image URL, and trip date.' });
    }
    
    try {
        const newFieldTrip = await FieldTrip.create({ title, description, imageUrl, tripDate });
        res.status(201).json(newFieldTrip);
    } catch (error) {
        res.status(500).json({ message: 'Server error while creating field trip entry.' });
    }
};

// @desc    Delete a field trip
// @route   DELETE /api/field-trips/:id
// @access  Private (Admin only)
const deleteFieldTrip = async (req, res) => {
    try {
        const fieldTrip = await FieldTrip.findById(req.params.id);
        
        if (!fieldTrip) {
            return res.status(404).json({ message: 'Field trip not found.' });
        }
        
        await fieldTrip.deleteOne();
        res.status(200).json({ id: req.params.id, message: 'Field trip deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Server error while deleting field trip entry.' });
    }
};

module.exports = {
    getFieldTrips,
    createFieldTrip,
    deleteFieldTrip,
};