import { makeExecutableSchema } from "graphql-tools"

import addressType from "../types/address"
import profileType from "../types/profile"

const profileQuery = `
type Query {
    profile (id: Int!) : Profile
}
`

export default makeExecutableSchema({
    typeDefs: [addressType, profileType, profileQuery]
})
