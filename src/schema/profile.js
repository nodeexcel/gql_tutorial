import { makeExecutableSchema } from "graphql-tools"

import addressType from "../types/address"

import profileType from "../types/profile"

import profileQuery from "../queries/profile"

import profileResolver from "../resolvers/profile"

import userQuery from "../queries/user"
import userType from "../types/user"

const queryType = `
type Query {
    _empty: String
}
`

export default makeExecutableSchema({
    typeDefs: [queryType , addressType, profileType, userType, userQuery, profileQuery],
    resolvers: [profileResolver]
})
