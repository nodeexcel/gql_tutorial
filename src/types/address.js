import { makeExecutableSchema } from "graphql-tools"

export default makeExecutableSchema({
    typeDefs: `
        enum CountryAllowed {
            IN,
            US
        }   
        type Address {
            id: ID!,
            address: String,
            country: CountryAllowed,
            phone: String
        }`
})