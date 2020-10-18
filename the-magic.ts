import { Freezable } from "./freezable";
import { Frozen } from "./frozen";

export function doTheMagic(toFreeze: any): any {
  // console.log({ toFreeze: toFreeze });
  return { frozenThing: toFreeze };
}

export function doTheLevelOneMagic(toFreeze: Freezable): unknown {
  (toFreeze as any).frozen = "❄️";
  return toFreeze as unknown;
}

export function doTheLevelTwoMagic<T>(toFreeze: T): Frozen<T> {
  (toFreeze as Frozen<T>).frozen = "❄️❄️";
  return toFreeze as Frozen<T>;
}
