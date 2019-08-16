import { combineReducers } from "redux";

/** Reducers */
import { reducer as TestGoingOnReducer } from "./TestGoingOnReducer/Reducer";

export default combineReducers({
  testGoingOn: TestGoingOnReducer
})