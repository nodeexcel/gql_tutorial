import addressType from "../types/address"

import profileType from "../types/profile"

import profileQuery from "../queries/profile"

import profileResolver from "../resolvers/profile"
import userResolver from "../resolvers/user"
import todoResolver from "../resolvers/todo"

import userQuery from "../queries/user"
import userType from "../types/user"

import profileMutation from "../mutations/profile"
import todoMutation from "../mutations/todo"

import todoSubscription from "../subscriptions/todo"

const queryType = `
type Query {
    _empty: String
}
`

const mutationType = `
type Mutation {
    _empty: String
}
`

import todoQuery from "../queries/todo"
import todoType from "../types/todo"

export const typeDefs = [
    queryType,
    addressType,
    profileType,
    userType,
    userQuery,
    profileQuery,
    todoType,
    todoQuery,
    mutationType,
    profileMutation,
    todoMutation,
    todoSubscription]

export const resolvers = [profileResolver, userResolver, todoResolver]

// addMockFunctionsToSchema({
//     schema: schema,
//     preserveResolvers: true
// })

// export default schema