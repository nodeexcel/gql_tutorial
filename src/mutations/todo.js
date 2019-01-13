export default `
input TodoInput {
    task: String,
    isComplete: Boolean
}
extend type Mutation {
    addTodo(input: TodoInput): Todo
}

`