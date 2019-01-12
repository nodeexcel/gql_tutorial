import userQuery from "../queries/user"
import todoQuery from "../queries/todo"

import resolvers from "../resolvers/user"

import { mergeSchemas } from "graphql-tools"

export default mergeSchemas({
    schemas: [
        todoQuery,
        userQuery
    ]
});