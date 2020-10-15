import { doTheMagic } from "./the-magic";
import { FrozenError } from "./frozen-error";

export function freeze(toFreeze: any): any {
  if (toFreeze.unfreezable) {
    throw new FrozenError(toFreeze);
  }
  return doTheMagic(toFreeze);
}
