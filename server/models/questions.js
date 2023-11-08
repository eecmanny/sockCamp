const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const questionSchema = new Schema({
    category: {
        type: String,
        required: true,
        trim: true,
    },
    question: {
        type: String,
        required: 'You need to provide a question!',
        minLength: 1,
        maxLength: 280,
        trim: true,
    },
    answers: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Answer',
        },
    ],
    });

const Question = model('Question', questionSchema);

module.exports = Question;