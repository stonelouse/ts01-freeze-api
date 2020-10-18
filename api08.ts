import { doTheLevelTwoMagic } from "./the-magic";
import { Freezable, assertFreezable } from "./freezable";
import { Frozen } from "./frozen";

export function freeze<T>(toFreeze: T): Frozen<Freezable> {
  assertFreezable(toFreeze);

  // Any code that is executed after the `Assertion guard`
  // ... can rely on that `toFreeze` is a `Freezable`
  const freezable: Freezable = toFreeze;

  return doTheLevelTwoMagic(freezable);
}
