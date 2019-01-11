import profileType from "../schema/profile"
import data from "../data"

import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt
} from "graphql"

export default new GraphQLObjectType({
    name: 'Todo',
    fields: {
        todo: {
            resolve: async () => {
                return {

                }
            }
        }
    }
});