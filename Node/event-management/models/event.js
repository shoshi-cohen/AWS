const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    producerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Producer', required: true }
});

module.exports = mongoose.model('Event', eventSchema);
