import { FETCH_COSTS } from './actions_types/index'
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
        const firebaseData = await app
            .firestore()
            .collection("costs")
            .get()
            .then(function (querySnapshot) {
                const _tempData = [];
                querySnapshot.forEach(function (doc) {
                    const item = { ...doc.data(), id: doc.id }
                    _tempData.push(item)
                })
                return _tempData
            })
        dispatch({ type: FETCH_COSTS, payload: firebaseData })
    }
}

