import {SEARCH} from "./types";

export const searchActionCreator = (value) =>({
    type: SEARCH,
    payload: value,
});