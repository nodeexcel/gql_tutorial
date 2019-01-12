import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
} from "graphql"

// import addressType from "./address"

// import data from "../data"

// export default new GraphQLObjectType({
//     name: 'Profile',
//     fields: {
//         id: {
//             type: GraphQLID
//         },
//         name: {
//             type: GraphQLString
//         },
//         address: {
//             type: GraphQLNonNull(new GraphQLList(addressType)),
//             resolve: async (user) => {
//                 let address = await data.getAddress()
//                 return address.filter((addr) => {
//                     return addr.user_id == user.id
//                 })
//             }
//         }
//     }
// })