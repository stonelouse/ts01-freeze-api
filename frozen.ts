import { ThawError } from "./thaw-error";

// `T` represents the type parameter
export type Frozen<T> = T & {
  // `&` is the syntax for an `intersection type`
  frozen: string;
};

export function assertFrozen(thing: unknown): asserts thing is Frozen<unknown>{
  if (!thing || !(thing as Frozen<unknown>).frozen) {
    throw new ThawError(thing);
  }
}