// const typeDefs = gql`
const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        createdAt: String
        scores: [Score]
    }

    type Score {
        _id: ID
        score: Int
        date: String
    }

    type Auth {
        token: ID!
        user: User
      }

    type Question {
        _id: ID
        questionText: String
        questionTheme: String
        answers: [Answer]
        createdAt: String
    }

    type Answer {
        _id: ID
        answerText: String
        answerAuthor: String
        createdAt: String
    }

    type Query {
        users: [User]
        user(username: String!): User
        questions: [Question]
        question(questionId: ID!): Question
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addQuestion(questionText: String!, questionTheme: String!): Question
        addScore(score: Int!, date: String!): User
    }
`;

module.exports = typeDefs;