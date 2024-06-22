import express from "express";
import http from 'http';
import {ApolloServer} from "@apollo/server";
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer';
import {typeDefsList} from "./graphql/index.js";
import resolvers from "./graphql/resolvers/resolvers.js";
import mongoose from "mongoose";
import {expressMiddleware} from "@apollo/server/express4";
import {dbInitializer} from "./database/initializer.js";
import cors from "cors";
import config from "../config/index.js";
import {container} from "./awilix/config.js";

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
    typeDefs: typeDefsList,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
    formatError: (error) => (
        {
            code: error.extensions.code,
            message: error.message
        })
})

await server.start().then(() => {
    dbInitializer(mongoose).catch(console.log);
}).catch(console.log);

app.use('/graphql',
    express.json(),
    cors(),
    expressMiddleware(server, {
        context: async ({req, res}) => {
            const postService = container.resolve('postService');

            return {
                req,
                res,
                postService
            }
        }
    })
);
await new Promise((resolve) => httpServer.listen({port: config.SERVER_CONFIG.PORT}, resolve));
console.log(`🚀 Server ready at http://localhost:${config.SERVER_CONFIG.PORT}/graphql`);