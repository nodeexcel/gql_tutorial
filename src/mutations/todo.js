export default `
input TodoInput {
    task: String!,
    isComplete: Boolean!
}
input TodoUpdateInput {
    id: ID!,
    task: String,
    isComplete: Boolean
}
extend type Mutation {
    addTodo(input: TodoInput): Todo,
    updateTodo(input: TodoUpdateInput): Todo
}
`