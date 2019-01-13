import user from "../types/user";

//this is our data store. this can changed to mongodb/mysql etc anything later on. for now its static json

//using async/await here as when we do actual integration with db, it will be async function only
let users = [{
    id: 1,
    name: "manish"
},
{
    id: 2,
    name: "test"
},
{
    id: 3,
    name: "test2"
}]

export default {
    addProfile: async (name) => {
        let id = Math.round(Math.random(0, 100) * 100, 0)
        users.push({
            id,
            name
        })
        return { id, name }
    },
    getUsers: async () => {
        return users
    },
    getAddress: async () => {
        return [
            {
                id: 1,
                address: "test",
                country: "IN",
                phone: "000",
                user_id: 1
            },
            {
                id: 2,
                address: "test2",
                country: "IN",
                phone: "2222",
                user_id: 1
            },
            {
                id: 3,
                address: "test3",
                country: "IN",
                phone: "3333",
                user_id: 2
            }
        ]
    }
}