import { doTheMagic } from "./the-magic";
import { FrozenError } from "./frozen-error";
import { isUnfreezable, Unfreezable } from "./unfreezable";

export function freeze(toFreeze: unknown): unknown {
  // Introducing `unknown` we can't use the `unfreezable` property. We get a compile-time error!
  if (!isUnfreezable(toFreeze)) {
    // at this point we know that `toFreeze` has NOT the type `Unfreezable`
    return doTheMagic(toFreeze);
  }
  // at this point we know that `toFreeze` has the type `Unfreezable`
  const unfreezable: Unfreezable = toFreeze;
  throw new FrozenError(toFreeze);
}
