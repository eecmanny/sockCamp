const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');


const { typeDefs, resolvers } = require('./schema');
const db = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    });

    const startApolloServer = async () => {
        await server.start();

        app.use(express.urlencoded({ extended: false }));
        app.use(express.json());

        app.use('/graphql', expressMiddleware(server));

        db.once('open', () => {
            app.listen(PORT, () => {
                console.log(`API server running on port ${PORT}!`);
                console.log(`Use GraphQL at http://localhost:${PORT}`);
            });
        });
    }

    startApolloServer();