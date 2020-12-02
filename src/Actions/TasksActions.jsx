import { FETCH_TASKS } from './actions_types/index'
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

export const FetchTasks = () => {
    return async function (dispatch) {
        const data = await app
            .firestore()
            .collection('tasks')
            .get().then(function (querySnapshot) {
                const costs = [];

                querySnapshot.forEach(function (doc) {
                    const cost = { ...doc.data(), id: doc.id };
                    costs.push(cost);
                });

                return costs;
            });

        dispatch({ type: FETCH_TASKS, payload: data });

    }
}

