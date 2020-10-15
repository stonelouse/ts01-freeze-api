import { FrozenError } from "./frozen-error";

export function assertThrowsFrozenError(thing: any, fn: (thing: any) => any) {
  try {
    return fn(thing);
    throw new Error("a 'FrozenError' was expected!");
  } catch (e) {
    if (e instanceof FrozenError) {
      console.log("was expected:", e);
    } else {
      throw e;
    }
  }
}
