import { pubsub } from '../pubsub'
let todos = []

export default {
    Subscription: {
        todoAdded: {
            subscribe: () => pubsub.asyncIterator('TODO_ADDED')
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
            pubsub.publish('TODO_ADDED', { postAdded: input });
            return input
        },
        updateTodo: (_, { input }) => {
            let id = input.id
            let updatedTodo = null
            todos = todos.map((todo) => {
                if (todo.id == id) {
                    updatedTodo = todo
                    if (input.task)
                        todo.task = input.task

                    if (typeof input.isComplete == "boolean")
                        todo.isComplete = input.isComplete
                }
                return todo
            })
            if (!updatedTodo)
                throw new Error("Invalid ID. ID Not Found")
            return updatedTodo
        }
    }
}