import { combineReducers } from "redux";
import { ProductReducer} from "./ProductReducer";
import { UserReducer } from "./UserReducer";

export const routeReducer=combineReducers({ ProductReducer,UserReducer})