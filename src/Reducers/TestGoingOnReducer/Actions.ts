import { SET_ACTIVED } from './Types';

export const setTestGoingOnActived = (bool: boolean) => (
  {
    type: SET_ACTIVED,
    callback: () => (bool), 
  }
)
