import React from "react";
import {LOGIN_USER, SIGN_UP_SUCCESS} from "../../actionsTypes/actionsTypes";
import {singUpFetch} from "./functions/signUp/sighUp";
import {login} from "./functions/login/login";

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null
};


export const authorization = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            let token;
            login(action.payload).then(res=> {
                state.access = res.access;

            });
            console.log("token1: ", token);
            return {...state, };
        case SIGN_UP_SUCCESS:
            singUpFetch(action.payload);
            return  {...state, isAuthenticated: false};
        default:
            return state;
    }
};
