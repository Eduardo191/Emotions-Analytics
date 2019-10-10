import { SET_ACTIVED } from "./Types";
import { TestGoingOnReducer } from "./Interfaces";

const initial_state = {
  actived: true
}

export const reducer = (state: TestGoingOnReducer = initial_state, action: any) => {

  switch (action.type) {

    case SET_ACTIVED:
      const actived = action.callback();
      return { actived }

    default:
      return state
  }
}