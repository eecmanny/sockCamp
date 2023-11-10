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
    }
});

const Answer = model('Answers', answerSchema);

module.exports = Answer;