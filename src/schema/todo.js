import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools"
import todoQuery from "../queries/todo"
import todoType from "../types/todo"

const schema = makeExecutableSchema({
    typeDefs: [todoType, todoQuery]
})

addMockFunctionsToSchema({
    schema: schema
})

export default schema