const { Schema, model } = require('mongoose');

const questionSchema = new Schema({
    category: {
        type: String,
        required: true,
        trim: true,
    },
    question: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
        trim: true,
    },
    choices: {
        type: Array,
        required: true,
    },
    correctAnswer: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
        trim: true,
    },
    });

const Question = model('Question', questionSchema);

module.exports = Question;