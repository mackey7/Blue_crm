import { ADD_CLIENT } from './actions_types/index'
import app from '../base'



export const AddClient = (task) => {
    return async function (dispatch) {
        const firestoreClient = await app.firestore().collection("clients").add(task).catch(err => {
            console.log(err);
        });
        dispatch({ type: ADD_CLIENT, payload: firestoreClient });
    }
}

