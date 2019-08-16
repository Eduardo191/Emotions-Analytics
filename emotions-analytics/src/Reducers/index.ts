import { combineReducers } from "redux";

/** Reducers */
import { reducer as AffectivaReducer } from "./Affectiva/Reducer";

export default combineReducers({
  affectiva: AffectivaReducer
})