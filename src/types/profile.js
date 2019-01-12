import { makeExecutableSchema } from "graphql-tools"

export default makeExecutableSchema({
    typeDefs: `
        type Profile {
            id: ID!,
            name: String,
            address: [Address]
        }`
})