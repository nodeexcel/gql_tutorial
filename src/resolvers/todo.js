import { pubsub } from '../pubsub'
let todos = []

export default {
    Subscription: {
        todoAdded: {
            subscribe: () => pubsub.asyncIterator('commentAdded')
        }
    },
    Query: {
        todos: () => {
            return todos
        },
        todo: (_, { id }) => {
            return todos.filter((todo) => {
                return todo.id == id
            })
        }
    },
    Mutation: {
        addTodo: (_, { input }) => {
            let id = Math.round(Math.random(0, 1000) * 1000)
            input.id = id
            todos.push(input)
            return input
        }
    }
}