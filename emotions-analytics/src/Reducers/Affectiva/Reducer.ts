import { CHANGE_ACTIVED } from "./Types";
import { AffectivaReducer } from "./Interfaces";

const initial_state = {
  actived: true
}

export const reducer = (state: AffectivaReducer = initial_state, action: any) => {

  switch (action.type) {

    case CHANGE_ACTIVED:
      const actived = action.callback();
      return { actived }

    default:
      return state
  }
}