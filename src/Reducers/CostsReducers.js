import { ADD_COST, DELETE_COST, FETCH_COSTS } from '../Actions/actions_types/index'
const initailState = {
    costs: []
}

export const CostsReducer = (state = initailState, actions) => {
    switch (actions.type) {
        case ADD_COST:
            return { ...state, costs: actions.payload }
            break
        case DELETE_COST:
            return { ...state, costs: actions.payload }
        case FETCH_COSTS:
            const a = { ...state, costs: actions.payload }
            console.log(actions.payload)
            return a

        default:
            return state
    }
}