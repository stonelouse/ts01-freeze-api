// `Unfreezable` is defined as an object
// ... whose property `unfreezable` is set to true.
export type Unfreezable = {
  unfreezable: true;
};

// Unfreezable type guard
export function isUnfreezable(thing: unknown): thing is Unfreezable {
  return thing && (thing as Unfreezable).unfreezable;
}
