import { CHANGE_ACTIVED } from './Types';

export const changeActived = (bool: boolean) => (
  {
    type: CHANGE_ACTIVED,
    callback: () => (bool), 
  }
)
