import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { TasksReducer } from './TasksReducers'
import { ClientsReducer } from './ClientsReducers'
import { CostsReducer } from './CostsReducers'

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    tasks: TasksReducer,
    clients: ClientsReducer,
    costs: CostsReducer

})

export default rootReducer;