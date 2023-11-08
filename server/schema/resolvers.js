const { Question, User } = require('../models');


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
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            return user;
        },

        // may end up not used
        addQuestion: async (parent, { questionText, questionTheme, answers }) => {
            const question = await Question.create({ questionText, questionTheme, answers });
            return question;
        },
    },
};

module.exports = resolvers;