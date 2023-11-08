const { Question } = require('../models');
const { User } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().sort({ createdAt: -1 });
        },

        // may need to switch to userId
        user: async (parent, { username }) => {
            return User.findOne({ username });
        },

        questions: async () => {
            return Question.find().sort({ createdAt: -1 });
        },

        question: async (parent, { questionId }) => {
            return Question.findOne({ _id: questionId });
        },
    },

    Mutation: {
        