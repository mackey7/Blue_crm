import { FETCH_TASKS } from '../Actions/actions_types/index'
const initailState = {
    tasks: []
}

export const TasksReducer = (state = initailState, actions) => {
    switch (actions.type) {
        case FETCH_TASKS:
            return { tasks: actions.payload }
            break

        default:
            return state
    }
}