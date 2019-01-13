import data from "../data"

export default {
    Query: {
        user: async (_, { id }) => {
            let users = await data.getUsers()
            let profile = users.find((user) => user.id == id)
            return {
                profile: profile
            }
        }
    }
}