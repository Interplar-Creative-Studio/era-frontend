import {combineReducers} from "redux";
import {auth} from "./auth/auth";
import {container} from "./container/container";

export let reducers = combineReducers({auth, container});