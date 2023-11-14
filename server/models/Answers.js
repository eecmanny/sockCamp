const { Schema, model } = require('mongoose');

const answerSchema = new Schema({

    isCorrect: {
        type: Boolean,
        required: true,
    },
            
    answersText: {
        type: String,
        minLength: 1,
        maxLength: 280,
        trim: true
    },

    questionId: {
        type: Schema.Types.ObjectId,
        ref: 'Question'
    },
});

const Answer = model('Answers', answerSchema);

module.exports = Answer;