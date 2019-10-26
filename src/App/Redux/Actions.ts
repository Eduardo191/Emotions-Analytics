import {
    CHANGE_TEST_GOING_ON,
} from "./Types";

export const changeTestGoingOn = (testGoingOn: boolean) => {
    return {
        type: CHANGE_TEST_GOING_ON,
        payload: testGoingOn,
    }
}