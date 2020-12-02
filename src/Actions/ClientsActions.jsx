import { ADD_CLIENT, FETCH_CLIENTS, DELETE_CLIENT } from './actions_types/index'
import app from '../base'


export const AddClient = (client) => {
    return async function (dispatch) {
        await app.firestore()
            .collection("clients")
            .add(client)
            .catch(err => {
                console.log(err);
            });
    }
}

export const FetchClients = () => {
    return async function (dispatch) {
        const firebaseData = await app
            .firestore()
            .collection("clients")
            .get()
            .then(function (querySnapshot) {
                const _tempData = [];
                querySnapshot.forEach(function (doc) {
                    const item = { ...doc.data(), id: doc.id }
                    _tempData.push(item)
                })
                return _tempData
            })
        dispatch({ type: FETCH_CLIENTS, payload: firebaseData })
    }
}

export const DeleteClient = (id) => {
    return async function (dispatch) {
        await app.firestore()
            .collection('clients')
            .doc(id)
            .delete().catch(err => {
                console.log(err);
            });
    }
}