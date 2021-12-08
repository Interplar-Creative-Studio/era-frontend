import {SEARCH} from "../../actions/types";

const initialState = {
    search: "",
};

export const container = (state = initialState, action) =>{
    const {type, payload} = action;

    switch (type){
        case SEARCH:
            return {...state, search: payload};
        default:
            return state;
    }

};
