import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { TasksReducer } from './TasksReducers'
import { ClientsReducer } from './ClientsReducer'

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    tasks: TasksReducer,
    clients: ClientsReducer

})

export default rootReducer;