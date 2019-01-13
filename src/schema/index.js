import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools"

import addressType from "../types/address"

import profileType from "../types/profile"

import profileQuery from "../queries/profile"

import profileResolver from "../resolvers/profile"
import userResolver from "../resolvers/user"

import userQuery from "../queries/user"
import userType from "../types/user"

const queryType = `
type Query {
    _empty: String
}
`

import todoQuery from "../queries/todo"
import todoType from "../types/todo"


const schema = makeExecutableSchema({
    typeDefs: [queryType, addressType, profileType, userType, userQuery, profileQuery, todoType, todoQuery],
    resolvers: [profileResolver, userResolver]
})

addMockFunctionsToSchema({
    schema: schema
})

export default schema