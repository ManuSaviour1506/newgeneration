const mongoose = require('mongoose');

const fieldTripSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    imageUrl: { 
        type: String, 
        required: true 
    },
    tripDate: { 
        type: Date, 
        required: true 
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
}, { timestamps: true });

module.exports = mongoose.model('FieldTrip', fieldTripSchema);