import { delay } from "../../Library";

export async function PostTest(testTypeId: number, personId: number) {
  await delay(3000);
  return 15;
}