// `Freezable` is defined as an object
// ... which never has an `unfreezable` property
// or
// An object with a value for the `unfreezable` property

import { FrozenError } from "./frozen-error";

// ... is never assignable to `Freezable`
export type Freezable = {
  unfreezable: never;
};

// Freezable type guard
export function isFreezable(thing: unknown): thing is Freezable {
  return thing && !(thing as Freezable).unfreezable;
}

// Freezable assertion guard
// If the function doesn't throw an error
// ... the passed object is `Freezable`
export function assertFreezable(thing: unknown): asserts thing is Freezable {
  if (!thing || (thing as Freezable).unfreezable) {
    throw new FrozenError(thing);
  }
}
