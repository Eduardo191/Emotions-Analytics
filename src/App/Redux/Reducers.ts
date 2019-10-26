import {
    CHANGE_TEST_GOING_ON,
} from "./Types";
import { combineReducers } from "redux";

const INITIAL_STATE = {
    testGoingOn: false,
};

const Reducers = (state = INITIAL_STATE, action: { type: string, payload: any }) => {

    switch (action.type) {

        case CHANGE_TEST_GOING_ON:
            return { ...state, testGoingOn: action.payload };

        default:
            return state;
    }
};

export default combineReducers({ Reducers });