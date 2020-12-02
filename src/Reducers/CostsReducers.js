import { ADD_COST, DELETE_COST, FETCH_COSTS } from '../Actions/actions_types/index'
const initailState = {
    costs: []
}

export const CostsReducer = (state = initailState, actions) => {
    switch (actions.type) {
        case FETCH_COSTS:
            return { costs: actions.payload }
            break
        default:
            return state
    }
}