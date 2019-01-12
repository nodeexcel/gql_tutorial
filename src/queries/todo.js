import { makeExecutableSchema , addMockFunctionsToSchema } from "graphql-tools"

const schema = makeExecutableSchema({
    typeDefs: `
        type Todo {
            task: String,
            isComplete: Boolean,
            date: Int
        }
        type Query {
            todos: [Todo]
            todo (id: ID) : Todo
        }
    `
})

addMockFunctionsToSchema({
    schema: schema
})

export default schema