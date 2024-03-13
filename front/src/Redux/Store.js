import {createStore} from   'redux';
import { routeReducer } from './Reducer';


export const store=createStore(routeReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())