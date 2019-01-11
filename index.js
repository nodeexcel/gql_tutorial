var express = require('express');
var graphqlHTTP = require('express-graphql');
var graphql = require('graphql');

var addressType = new graphql.GraphQLObjectType({
    name: "address",
    fields: {
        id: { type: graphql.GraphQLID },
        address: { type: graphql.GraphQLString },
        country: { type: graphql.GraphQLString },
        phone: { type: graphql.GraphQLString }
    }
})

var profileType = new graphql.GraphQLObjectType({
    name: 'Profile',
    fields: {
        id: {
            type: graphql.GraphQLID
        },
        name: {
            type: graphql.GraphQLString
        },
        address: {
            type: graphql.GraphQLNonNull(addressType),
            resolve: () => {
                return {
                    id: "1",
                    address: "Noida",
                    country: "IN",
                    phone: "99999"
                }
            }
        }
    }
})

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
            type: graphql.GraphQLInt,
            resolve: () => {
                return Math.round(Math.random() * 100, 0)
            }
        },
        profile: {
            type: profileType,
            resolve: () => {
                return {
                    id: "1",
                    name: "Manish"
                }
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