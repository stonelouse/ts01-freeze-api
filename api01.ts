import { doTheMagic } from "./the-magic";

export function freeze(toFreeze: any): any {
  return doTheMagic(toFreeze);
}
