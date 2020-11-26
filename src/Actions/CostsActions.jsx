import { ADD_COST } from './actions_types/index'
import app from '../base'



export const AddCost = (cost) => {
    return async function (dispatch) {
        const firestoreCost = await app.firestore().collection("costs").add(cost).catch(err => {
            console.log(err);
        });
        dispatch({ type: ADD_COST, payload: firestoreCost });
    }
}

