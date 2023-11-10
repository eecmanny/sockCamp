const { Schema, model } = require('mongoose');

const answerSchema = new Schema({
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
    });

const Question = model('Question', questionSchema);

module.exports = Question;