import {pubsub} from '../pubsub'

export default {
    Subscription: {
        todoAdded: {
            subscribe: () => pubsub.asyncIterator('commentAdded')
        }
    }
}