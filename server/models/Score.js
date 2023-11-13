const { Schema, model } = require('mongoose');

const scoreSchema = new Schema({
    score: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Score = model('Score', scoreSchema);

module.exports = Score;