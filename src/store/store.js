import {createStore, applyMiddleware} from 'redux';
import {reducers} from "./reducers/reducers";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

export let store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));