import { ADD_COST, DELETE_COST, FETCH_COSTS } from './actions_types/index'
import app from '../base'



export const AddCost = (cost) => {
    return async function (dispatch) {
        const firestoreCost = await app.firestore().collection("costs").add(cost).catch(err => {
            console.log(err);
        });
        dispatch({ type: ADD_COST, payload: firestoreCost });
    }
}

export const DeleteCost = (id) => {
    return async function (dispatch) {
        const firestoreCost = await app.firestore()
            .collection('costs')
            .doc(id)
            .delete().catch(err => {
                console.log(err);
            });
        dispatch({ type: DELETE_COST, payload: firestoreCost });

    }
}

export const FetchCosts = () => {
    return async function (dispatch) {
        const data = await app
            .firestore()
            .collection('costs')
            .get().then(function (querySnapshot) {
                const costs = [];

                querySnapshot.forEach(function (doc) {
                    const cost = { ...doc.data(), id: doc.id };
                    costs.push(cost);
                });

                return costs;
            });

        dispatch({ type: FETCH_COSTS, payload: data });

    }
}

