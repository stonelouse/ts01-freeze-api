import { doTheLevelThreeMagic } from "./the-magic";
import { Freezable, assertFreezable } from "./freezable";
import { assertFrozen, Frozen } from "./frozen";
import { Thawed } from "./thawed";
import { ThawError } from "./thaw-error";

export function freeze<T extends Freezable>(toFreeze: T): Frozen<Freezable> {
  assertFreezable(toFreeze);

  // Any code that is executed after the `Assertion guard`
  // ... can rely on that `toFreeze` is a `Freezable`
  const freezable: Freezable = toFreeze;

  const result = doTheLevelThreeMagic(freezable);
  return result;
}

export function thaw<T extends Frozen<Freezable>>(toThaw: T): Thawed<T> {
  assertFrozen(toThaw);

  delete toThaw.frozen;
  return toThaw as Thawed<T>;
}
