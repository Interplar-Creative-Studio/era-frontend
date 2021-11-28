import React from "react";
import {LOGIN_USER, SIGN_UP_SUCCESS} from "../../actionsTypes/actionsTypes";
import {singUpFetch} from "./functions/signUp/sighUp";


const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null
};


export const authorization = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, user: action.payload};
        case SIGN_UP_SUCCESS:
            singUpFetch(action.payload);
            return  {...state, isAuthenticated: false};
        default:
            return state;
    }
};
