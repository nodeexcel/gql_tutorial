export default `
extend type Query {
    todos: [Todo]
    todo (id: ID) : Todo
}
`