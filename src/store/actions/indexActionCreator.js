import {GET_INDEX} from "./types";

export const indexActionCreator = (id)=>({
    type: GET_INDEX,
    payload: id,
});