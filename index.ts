// Import stylesheets
import "./style.css";
import { assertThrowsFrozenError } from "./util";
import { freeze as api01_freeze } from "./api01";
import { freeze as api02_freeze } from "./api02";
import { freeze as api03_freeze } from "./api03";
import { freeze as api04_freeze } from "./api04";
import { freeze as api05_freeze } from "./api05";
import { freeze as api06_freeze } from "./api06";
import { freeze as api07_freeze } from "./api07";
import { freeze as api08_freeze } from "./api08";
import { freeze as api09_freeze } from "./api09";
import { freeze as api10_freeze } from "./api10"; // TODO
import { thaw as api10_thaw } from "./api10"; // TODO
import { FrozenError } from "./frozen-error";
import { Freezable } from "./freezable";
import { Frozen } from "./frozen";

// TODO demo for api10

console.log(api09_freeze(({ v: "api09" } as unknown) as Freezable)); // again: What a hack
assertThrowsFrozenError({ v: "api09a", unfreezable: true }, api09_freeze); // again: What a hack
console.log(
  api09_freeze(({ v: "api09b", unfreezable: false } as unknown) as Freezable)
);

console.log(api08_freeze({ v: "api08" }));
assertThrowsFrozenError({ v: "api08a", unfreezable: true }, api08_freeze);
console.log(api08_freeze({ v: "api08b", unfreezable: false }));

// what a hack.
const freezable: Freezable = ({
  v: "api07"
} as unknown) as Freezable;
console.log(api07_freeze(freezable));

// Compile-error:
// Argument of type '{ v: string; }' is not assignable to parameter of type 'Freezable'.
//   Object literal may only specify known properties, and 'v' does not exist in type 'Freezable'.(2345)
// console.log(api06_freeze({ v: "api06" }));
assertThrowsFrozenError({ v: "api06a", unfreezable: true }, api06_freeze);
// Compile-error:
// Type 'boolean' is not assignable to type 'never'.(2322)
//   The expected type comes from property 'unfreezable' which is declared here on type 'Freezable'
// console.log(api06_freeze({ v: "api06b", unfreezable: false }));

console.log(api05_freeze({ v: "api05" }));
assertThrowsFrozenError({ v: "api05a", unfreezable: true }, api05_freeze);
console.log(api05_freeze({ v: "api05b", unfreezable: false }));

assertThrowsFrozenError("this function never returns", throwFrozenError);

console.log(api04_freeze({ v: "api04" }));
assertThrowsFrozenError({ v: "api04a", unfreezable: true }, api04_freeze);
console.log(api04_freeze({ v: "api04b", unfreezable: false }));

console.log(api03_freeze({ v: "api03" }));
assertThrowsFrozenError({ v: "api03a", unfreezable: true }, api03_freeze);
console.log(api03_freeze({ v: "api03b", unfreezable: false }));

console.log(api02_freeze({ v: "api02" }));
assertThrowsFrozenError({ v: "api02a", unfreezable: true }, api02_freeze);
console.log(api02_freeze({ v: "api02b", unfreezable: false }));

console.log(api01_freeze({ v: "api01" }));

function throwFrozenError(errorMsg: string): never {
  throw new FrozenError(errorMsg);
}

// Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
