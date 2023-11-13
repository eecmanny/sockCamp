const { Schema, model } = require('mongoose');

const answerSchema = new Schema({
    answers: [
        {
        type: Schema.Types.ObjectId,
        ref: 'CorrectAnswer',
        },
    ],

    });

const Question = model('Question', questionSchema);

module.exports = Question;