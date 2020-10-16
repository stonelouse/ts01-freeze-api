import { doTheMagic } from "./the-magic";
import { FrozenError } from "./frozen-error";
import { isFreezable, Freezable, assertFreezable } from "./freezable";

export function freeze(toFreeze: unknown): unknown {
  assertFreezable(toFreeze);

  // Any code that is executed after the `Assertion guard`
  // ... can rely on that `toFreeze` is a `Freezable`
  const freezable: Freezable = toFreeze;

  return doTheMagic(freezable);
}
