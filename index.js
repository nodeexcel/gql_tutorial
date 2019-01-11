var express = require('express');
var graphqlHTTP = require('express-graphql');
var graphql = require('graphql');

var queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        hello: {
            type: graphql.GraphQLString,
            resolve: (_) => {
                return "test"
            }
        },
        number: {
            type: graphql.GraphQLID,
            resolve: () => {
                return Math.round(Math.random() * 100 , 0)
            }
        }
    }
});

var schema = new graphql.GraphQLSchema({ query: queryType });


var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');