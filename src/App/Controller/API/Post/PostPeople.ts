import { delay } from "../../../Logic/Library";

export async function PostPeople(peopleValues: Array<{ key: string, value: any }>) {
  await delay(3000);
  return false;
}