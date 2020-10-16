// `Freezable` is defined as an object
// ... which never has an `unfreezable` property
// or
// An object with a value for the `unfreezable` property
// ... is never assignable to `Freezable`
export type Freezable = {
  unfreezable: never;
};

// Freezable type guard
export function isFreezable(thing: unknown): thing is Freezable {
  return thing && !(thing as Freezable).unfreezable;
}
