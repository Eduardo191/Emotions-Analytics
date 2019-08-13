import { delay } from "../Library";

export async function PostPeople(peopleValues: Array<{ fieldName: string, value: any }>) {
  await delay(3000);
  return false;
}