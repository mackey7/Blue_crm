import { ADD_TASK } from './actions_types/index'
import app from '../base'



export const AddTask = (task) => {
    return async function (dispatch) {
        await app.firestore().collection("tasks").add(task).catch(err => {
            console.log(err);
        });

    }
}

export const DeleteTask = (id) => {
    return async function (dispatch) {
        await app.firestore()
            .collection('tasks')
            .doc(id)
            .delete().catch(err => {
                console.log(err);
            });


    }
}
