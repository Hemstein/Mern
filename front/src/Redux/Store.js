// should be install redux thunk
import {createStore,compose,applyMiddleware} from "redux"
import { routReducer } from './Reducer/index'
import {thunk} from "redux-thunk"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=createStore(routReducer,composeEnhancers(applyMiddleware(thunk)))