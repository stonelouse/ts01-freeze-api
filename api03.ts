import { doTheMagic } from "./the-magic";
import { FrozenError } from "./frozen-error";
import { isUnfreezable } from "./unfreezable";

export function freeze(toFreeze: unknown): unknown {
  // Introducing `unknown` we can't use the `unfreezable` property. We get a compile-time error!
  if (!isUnfreezable(toFreeze)) {
    // at this point we know that `toFreeze` has the type `Unfreezable`
    throw new FrozenError(toFreeze);
  }
  return doTheMagic(toFreeze);
}
