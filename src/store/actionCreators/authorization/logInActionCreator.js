import {LOGIN_USER} from "../../actionsTypes/actionsTypes";

export const logInActionCreator = userObject => ({
    type: LOGIN_USER,
    payload: userObject,
});