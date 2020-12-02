import { ADD_CLIENT, FETCH_CLIENTS, DELETE_CLIENT } from '../Actions/actions_types/index'
const initailState = {
    clients: []
}

export const ClientsReducer = (state = initailState, actions) => {
    switch (actions.type) {
        // case ADD_CLIENT:
        //     const c = { ...state, clients: [...state.clients, actions.payload] }
        //     console.log(actions.payload)
        //     return c
        //     break
        case FETCH_CLIENTS:

            const a = { clients: actions.payload }
            // console.log(actions.payload)
            return a
            break
        // case DELETE_CLIENT:

        //     const b = { ...state, clients: actions.payload }
        //     // console.log(actions.payload)
        //     return b
        //     break
        default:
            return state
    }
}