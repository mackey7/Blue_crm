import { ADD_COST, DELETE_COST, FETCH_COSTS } from '../Actions/actions_types/index'
const initailState = {
    costs: []
}

export const CostsReducer = (state = initailState, actions) => {
    switch (actions.type) {
        case ADD_COST:
            return { ...state, costs: [...state.costs, actions.payload] }
            break
        case DELETE_COST:
            return { ...state, costs: actions.payload }
            break
        case FETCH_COSTS:
            return { costs: actions.payload }
            break
        default:
            return state
    }
}