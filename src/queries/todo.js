export default `
type Query {
    todos: [Todo]
    todo (id: ID) : Todo
}
`