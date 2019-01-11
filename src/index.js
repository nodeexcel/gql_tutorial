var express = require('express');
var graphqlHTTP = require('express-graphql');
var graphql = require('graphql');

import profileQuery from './queries/user'
import todoQuery from './queries/todo'

var schema = new graphql.GraphQLSchema({ query:  });

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');