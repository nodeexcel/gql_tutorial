var express = require('express');
var graphqlHTTP = require('express-graphql');
var graphql = require('graphql');

import profileType from "./schema/profile"
import data from "./data"

var queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        profile: {
            type: profileType,
            args: {
                id: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) }
            },
            resolve: async (_, { id }) => {
                let users = await data.getUsers()
                return users.find((user) => {
                    return user.id == id
                })
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