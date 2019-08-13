import { delay } from "../Library/delay";

export async function PostTestType(testTypeValues: Array<{ fieldName: string, value: any }>) {
  await delay(3000);
  return true;
}