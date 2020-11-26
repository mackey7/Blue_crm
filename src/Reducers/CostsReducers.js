import { ADD_COST } from '../Actions/actions_types/index'
const initailState = {
    costs: []
}

export const CostsReducer = (state = initailState, actions) => {
    switch (actions.type) {
        case ADD_COST:
            return { costs: actions.payload }
            break

        default:
            return state
    }
}