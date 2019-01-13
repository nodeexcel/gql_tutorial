import data from "../data"

export default {
    Query: {
        profile: async (_, { id }) => {
            let users = await data.getUsers()
            return users.find((user) => {
                return user.id == id
            })
        }
    },
    Profile: {
        address: async (user) => {
            let address = await data.getAddress()
            return address.filter((addr) => {
                return addr.user_id == user.id
            })
        }
    },
    Mutation: {
        addProfile : async (_, {name }) => {
            return await data.addProfile(name)
        }
    }
}