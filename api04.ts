import { doTheMagic } from "./the-magic";
import { FrozenError } from "./frozen-error";
import { isFreezable, Freezable } from "./freezable";

export function freeze(toFreeze: unknown): unknown {
  if (isFreezable(toFreeze)) {
    // at this point we know that `toFreeze` has the type `Freezable`
    const freezable: Freezable = toFreeze;

    // compile-time error: Type 'boolean' is not assignable to type 'never'.(2322)
    //freezable.unfreezable = false;

    return doTheMagic(freezable);
  }
  // at this point we know that `toFreeze` has NOT the type `Freezable`
  throw new FrozenError(toFreeze);
}
