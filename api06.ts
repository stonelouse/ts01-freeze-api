import { doTheMagic } from "./the-magic";
import { Freezable, assertFreezable } from "./freezable";

export function freeze(toFreeze: Freezable): unknown {
  assertFreezable(toFreeze);

  // Any code that is executed after the `Assertion guard`
  // ... can rely on that `toFreeze` is a `Freezable`
  const freezable: Freezable = toFreeze;

  return doTheMagic(freezable);
}
