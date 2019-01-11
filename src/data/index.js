//this is our data store. this can changed to mongodb/mysql etc anything later on. for now its static json

//using async/await here as when we do actual integration with db, it will be async function only
export default {
    getUsers: async () => {
        return [
            {
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
            }
        ]
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