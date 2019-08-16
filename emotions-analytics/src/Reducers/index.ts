import { combineReducers, createStore } from "redux";

/** Reducers */
import { reducer as WatchingReducer } from "./Affectiva/Reducer";

const reducers = combineReducers({
  affectiva: WatchingReducer
});
export const store = createStore(reducers);