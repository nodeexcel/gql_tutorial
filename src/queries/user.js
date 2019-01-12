export default `
enum CountryAllowed {
    IN,
    US
}   
type Address {
    id: ID!,
    address: String,
    country: CountryAllowed,
    phone: String
}
 type Profile {
     id: ID!,
     name: String,
     address: [Address]
 }
 type Query {
     profile (id: Int!) : Profile
 }
`
