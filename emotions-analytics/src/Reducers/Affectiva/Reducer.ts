import { CHANGE_ACTIVATED, CHANGE_TEST_ID, CHANGE_AFFECTIVA } from "./Types";
import { WatchingReducer } from "./Interfaces";

const initial_state = {
  activated: false,
  testId: null,
  affectiva: {
    faces: null,
    image: null,
  }
}

export const reducer = (state: WatchingReducer = initial_state, action: any) => {

  switch (action.type) {

    case CHANGE_ACTIVATED:
      const activated = action.payload();
      return { activated }
    
    case CHANGE_TEST_ID:
      const testId = action.payload();
      return { testId }

    case CHANGE_AFFECTIVA:
      const affectiva = action.payload();
      return { affectiva }

    default:
      return state
  }
}