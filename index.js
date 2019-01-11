var express = require('express');
var graphqlHTTP = require('express-graphql');
var graphql = require('graphql');


const users = [
    {
        id: 1,
        name : "manish"
    },
    {
        id: 2,
        name : "test"
    },
    {
        id: 3,
        name : "test2"
    }
]

const address = [
    {
        id: 1,
        address : "test",
        country: "IN",
        phone: "000",
        user_id: 1
    },
    {
        id: 2,
        address : "test2",
        country: "IN",
        phone: "2222",
        user_id: 1
    },
    {
        id: 3,
        address : "test3",
        country: "IN",
        phone: "3333",
        user_id: 2
    }
]

const countryEnumType = new graphql.GraphQLEnumType({
    name: 'countryEnum',
    values: {
      IN: {
        value: "IN",
      },
      US: {
        value: "US",
      }
    },
  });

  
var addressType = new graphql.GraphQLObjectType({
    name: "address",
    fields: {
        id: { type: graphql.GraphQLID },
        address: { type: graphql.GraphQLString },
        country: { type: countryEnumType },
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
            type: graphql.GraphQLNonNull(new graphql.GraphQLList(addressType)),
            resolve: () => {
                return [{
                    id: "1",
                    address: "Noida",
                    country: "IN",
                    phone: "99999"
                }]
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