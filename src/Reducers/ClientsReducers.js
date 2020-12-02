import { ADD_CLIENT, FETCH_CLIENTS, DELETE_CLIENT } from '../Actions/actions_types/index'
const initailState = {
    clients: []
}

export const ClientsReducer = (state = initailState, actions) => {
    switch (actions.type) {
        case ADD_CLIENT:
            return { ...state, clients: [...state.clients, actions.payload] }
            break
        case FETCH_CLIENTS:
            return { clients: actions.payload }
            break
        case DELETE_CLIENT:
            return { ...state, clients: actions.payload }
            break
        default:
            return state
    }
}