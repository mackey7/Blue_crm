import { ADD_COST, DELETE_COST, FETCH_COSTS } from './actions_types/index'
import app from '../base'



export const AddCost = (cost) => {
    return async function (dispatch) {
        await app.firestore().collection("costs").add(cost).catch(err => {
            console.log(err);
        });

    }
}

export const DeleteCost = (id) => {
    return async function (dispatch) {
        await app.firestore()
            .collection('costs')
            .doc(id)
            .delete().catch(err => {
                console.log(err);
            });


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

