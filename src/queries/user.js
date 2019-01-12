import { makeExecutableSchema } from "graphql-tools"

import { addressType } from "../types/address"

import { resolver as profileResolver, profileType } from "../types/profile"

const profileQuery = `
type Query {
    profile (id: Int!) : Profile
}
`

export const queryResolver = {
    Query: {
        profile: async (_, { id }) => {
            let users = await data.getUsers()
            return users.find((user) => {
                return user.id == id
            })
        }
    }
}

export default makeExecutableSchema({
    typeDefs: [addressType, profileType, profileQuery],
    resolvers: [queryResolver, profileResolver]
})
