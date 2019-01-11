import profileType from "../schema/profile"
import data from "../data"

import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt
} from "graphql"

export default new GraphQLObjectType({
    name: 'Query',
    fields: {
        profile: {
            type: profileType,
            args: {
                id: { type: GraphQLNonNull(GraphQLInt) }
            },
            resolve: async (_, { id }) => {
                let users = await data.getUsers()
                return users.find((user) => {
                    return user.id == id
                })
            }
        }
    }
});