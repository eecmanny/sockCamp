const { Question, User, Score } = require('../models');
// const { populate } = require('../models/Answers');
const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate("scores").sort({ createdAt: -1 });
        },

        // may need to switch to userId
        user: async (parent, { username }) => {
            return User.findOne({ username });
        },

        // question: async (parent, { questionId }) => {
        //     return Question.findOne({ _id: questionId });
        // },

        // question: async (parent, { questionId }) => {
        //     return Question.findOne({ questionId }).populate('answers');
        // },

        questions : async (parent, { question }) => {
            const questions = await Question.find();
            console.log(questions);
            return questions;
        }


    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            console.log(user);
            if (!user) {
                throw AuthenticationError;
            }
            console.log(password);
            const correctPw = await user.isCorrectPassword(password);
            console.log(correctPw);
            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },



        addScore: async (parent, { score, date }, context) => {
            if (context.user) {
                const addUserScore = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { scores: score } },
                    { new: true }
                );
                return addUserScore;
            }
            const userScore = await Score.create({ score, date });
            return userScore;
        },

        updateScore: async (parent, { score, date }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { scores: score } },
                    { new: true }
                );
                return updatedUser;
            }
            const userScore = await Score.updateOne({ score, date });
            return userScore;
        },
    },

};

module.exports = resolvers;

