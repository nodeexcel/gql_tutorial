import profileQuery from "../queries/profile"
import todoQuery from "../queries/todo"

import { mergeSchemas } from "graphql-tools"

export default mergeSchemas({
    schemas: [
        todoQuery,
        profileQuery
    ]
});