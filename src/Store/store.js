import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import rootReducer from '../Reducers/rootReducer'
const middleware = applyMiddleware(thunk)


export const store = createStore(rootReducer, middleware);
