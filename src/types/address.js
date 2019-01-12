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
}`