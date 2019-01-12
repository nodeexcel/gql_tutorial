import addressType from "../types/address"
import profileType from "../types/profile"
import userQuery from "../queries/user"

import resolvers from "../resolvers/user"

import { mergeSchemas } from "graphql-tools"

export const schema = mergeSchemas({
    schemas: [
        addressType,
        profileType,
        userQuery
    ],
    resolvers: resolvers
});