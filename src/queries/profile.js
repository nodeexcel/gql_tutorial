const { gql } = require('apollo-server');

export default gql`
extend type Query {
    profile (id: Int!) : Profile
}
`


