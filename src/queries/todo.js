const { gql } = require('apollo-server');

export default gql`
extend type Query {
    todos: [Todo]
    todo (id: ID) : Todo
}
`