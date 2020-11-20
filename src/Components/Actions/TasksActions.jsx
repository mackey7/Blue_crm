import { ADD_TASK } from './actions_types/index'
import app from '../../base'



export const AddTask = (task) => {
    return async function (dispatch) {
        const firestoreTask = await app.firestore().collection("tasks").add(task).catch(err => {
            console.log(err);
        });
        dispatch({ type: ADD_TASK, payload: firestoreTask });
    }
}

