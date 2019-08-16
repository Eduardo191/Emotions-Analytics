import { CHANGE_ACTIVATED, CHANGE_TEST_ID, CHANGE_AFFECTIVA } from './Types';

export const setAffectivaActivated = (bool: boolean) => (
  {
    type: CHANGE_ACTIVATED,
    payload: bool,
  }
)

export const setAffectivaTestId = (testId: number) => (
  {
    type: CHANGE_TEST_ID,
    payload: testId,
  }
)

export const setAffectiva = (faces: any, image: any) => (
  {
    type: CHANGE_AFFECTIVA,
    payload: {faces, image},
  }
)