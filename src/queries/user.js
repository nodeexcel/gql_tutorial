import { makeExecutableSchema } from "graphql-tools"

export default makeExecutableSchema({
    typeDefs: `
        type Query {
            profile (id: Int!) : Profile
        }
`})
