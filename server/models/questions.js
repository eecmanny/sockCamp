const { Schema, model } = require('mongoose');

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
    correctAnswers: [
        {
        type: Schema.Types.ObjectId,
        ref: 'CorrectAnswer',
        },
    ],
    incorrectAnswers1: [
        {
        type: Schema.Types.ObjectId,
        ref: 'IncorrectAnswer',
        },
    ],
    incorrectAnswers2: [
        {
        type: Schema.Types.ObjectId,
        ref: 'IncorrectAnswer',
        },
    ],
    incorrectAnswers3: [
        {
        type: Schema.Types.ObjectId,
        ref: 'IncorrectAnswer',
        },
    ],
    });

const Question = model('Question', questionSchema);

module.exports = Question;