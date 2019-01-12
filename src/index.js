var express = require('express');
var graphqlHTTP = require('express-graphql');
import { makeExecutableSchema , addMockFunctionsToSchema } from 'graphql-tools';


import typeDefs from './queries/user'
import resolvers from './resolvers/user'

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

// addMockFunctionsToSchema({ schema });


var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');