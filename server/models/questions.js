const { Schema, model } = require('mongoose');

const questionSchema = new Schema({
    category: {
        type: String,
        required: true,
        trim: true,
    },
    // questionId: {
    //     type: Number,
    //     required: true,
    // },
    question: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
        trim: true,
    },
    // answers: [
    //     {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Answer',
    //     },
    // ],
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