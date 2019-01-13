import { makeExecutableSchema } from "graphql-tools"

import addressType from "../types/address"

import profileType from "../types/profile"

import profileQuery from "../queries/profile"

import profileResolver from "../resolvers/profile"

export default makeExecutableSchema({
    typeDefs: [addressType, profileType, profileQuery],
    resolvers: [profileResolver]
})
