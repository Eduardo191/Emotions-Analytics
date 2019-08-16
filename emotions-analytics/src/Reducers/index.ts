import { combineReducers, createStore } from "redux";

/** Reducers */
import { reducer as TestGoingOnReducer } from "./TestGoingOnReducer/Reducer";

const reducers = combineReducers({
  testGoingOn: TestGoingOnReducer
})
export const store = createStore(reducers);