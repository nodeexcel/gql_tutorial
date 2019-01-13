var express = require('express');
var graphqlHTTP = require('express-graphql');

const { ApolloServer } = require('apollo-server');



import { typeDefs, resolvers } from "./schema"

// var app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    mocks: true,
    mockEntireSchema: false,
});

server.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');