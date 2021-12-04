import {LOGIN_USER, SIGN_UP_SUCCESS} from "../../actionsTypes/actionsTypes";
import {singUpFetch} from "./functions/signUp/sighUp";
import {login} from "./functions/login/login";

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null,

};


export const authorization = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return login(action.payload).
            then(res=> {return {...state, access: res.access, refresh: res.refresh}});

        case SIGN_UP_SUCCESS:
            singUpFetch(action.payload);
            return  {...state, isAuthenticated: false};
        default:
            return state;
    }
};
