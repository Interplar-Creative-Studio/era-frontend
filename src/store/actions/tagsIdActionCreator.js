import {TAG_ID} from "./types";

export const tagsIdActionCreator = (id) => ({
    type: TAG_ID,
    payload: id,
});
