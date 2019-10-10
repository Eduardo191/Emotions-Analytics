import { delay } from "../../../Logic/Library/delay";

export async function PostTestType(testTypeValues: Array<{ key: string, value: any }>) {
  await delay(3000);
  return true;
}