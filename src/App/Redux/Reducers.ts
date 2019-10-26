import {
    CHANGE_AFFECTIVA_IS_LOADED,
} from "./Types";
import { combineReducers } from "redux";

const INITIAL_STATE = {
    affectivaIsLoaded: false,
};

const Reducers = (state = INITIAL_STATE, action: { type: string, payload: any }) => {

    switch (action.type) {

        case CHANGE_AFFECTIVA_IS_LOADED:
            return { ...state, affectivaIsLoaded: action.payload };

        default:
            return state;
    }
};

export default combineReducers({ Reducers });