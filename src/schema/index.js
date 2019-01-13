import userSchema from "./profile"
import todoSchema from "./todo"

import { mergeSchemas } from "graphql-tools"

export default mergeSchemas({
    schemas: [
        userSchema,
        todoSchema
    ]
});