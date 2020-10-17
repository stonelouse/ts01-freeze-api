import { Freezable } from "./freezable";

export function doTheMagic(toFreeze: any): any {
  // console.log({ toFreeze: toFreeze });
  return { frozenThing: toFreeze };
}

export function doTheLevelOneMagic(toFreeze: Freezable): unknown {
  (toFreeze as any).frozen = "❄️";
  return toFreeze as unknown;
}
