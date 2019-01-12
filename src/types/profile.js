import data from '../data'


export const profileType = `
type Profile {
    id: ID!,
    name: String,
    address: [Address]
}`

export const resolver = {
    Profile: {
        address: async (user) => {
            console.log(user)
            let address = await data.getAddress()
            return address.filter((addr) => {
                return addr.user_id == user.id
            })
        }
    }
}