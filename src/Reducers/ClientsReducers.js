import { ADD_CLIENT } from '../Actions/actions_types/index'
const initailState = {
    clients: []
}

export const ClientsReducer = (state = initailState, actions) => {
    switch (actions.type) {
        case ADD_CLIENT:
            return { clients: actions.payload }
            break

        default:
            return state
    }
}