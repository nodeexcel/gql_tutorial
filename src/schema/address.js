import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType
} from "graphql"

export const countryEnumType = new GraphQLEnumType({
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


export default new GraphQLObjectType({
    name: "address",
    fields: {
        id: { type: GraphQLID },
        address: { type: GraphQLString },
        country: { type: countryEnumType },
        phone: { type: GraphQLString }
    }
})