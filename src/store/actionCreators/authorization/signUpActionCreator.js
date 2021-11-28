import {SIGN_UP_SUCCESS} from "../../actionsTypes/actionsTypes";

export const signUpActionCreator = (userObject) => ({
        type: SIGN_UP_SUCCESS,
        payload: userObject,
});

