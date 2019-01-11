var express = require('express');
var graphqlHTTP = require('express-graphql');
var graphql = require('graphql');

import queryType from './queries/user'

var schema = new graphql.GraphQLSchema({ query: queryType });

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');