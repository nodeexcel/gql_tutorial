export const addressType = `
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

