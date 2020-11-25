import { ADD_TASK } from '../Actions/actions_types/index'
const initailState = {
    posts: []
}

export const TasksReducer = (state = initailState, actions) => {
    switch (actions.type) {
        case ADD_TASK:
            return { posts: actions.payload }
            break

        default:
            return state
    }
}