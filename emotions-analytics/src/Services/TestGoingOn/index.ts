import { store } from "../../Reducers";
// import { setAffectivaActivated, setAffectivaTestId } from "../../Reducers/Affectiva/Actions"
import { PostTest } from "../API/Post/PostTest";
// import { initializeAffectiva } from "./Affectiva";

export async function initializeTest(testTypeId: number, personId: number) {

  const testId = await PostTest(testTypeId, personId)

  let response: string | true = true;

  if (testId) {
   
    // await initializeAffectiva();
    // await initializeTracking();
    // startTimeStamp();
  
    // store.dispatch(setAffectivaTestId(testId));
    // store.dispatch(setAffectivaActivated(true));
  
  } else {
    response = "O novo teste não pode ser salvo.";
  }

  return(response);
}