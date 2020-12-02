import { ADD_CLIENT, FETCH_CLIENTS, DELETE_CLIENT } from '../Actions/actions_types/index'
const initailState = {
    clients: []
}

export const ClientsReducer = (state = initailState, actions) => {
    switch (actions.type) {
        case FETCH_CLIENTS:
            return { clients: actions.payload }
            break
        default:
            return state
    }
}