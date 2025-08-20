const mongoose = require('mongoose');

// This schema is for news articles with an associated image URL.
const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    // A field to store the URL of the news image, which is required.
    imageUrl: { type: String, required: true }, 
    date: { type: Date, default: Date.now }
}, { timestamps: true });

// Exports the 'News' model, making it available for use in controllers.
module.exports = mongoose.model('News', newsSchema);