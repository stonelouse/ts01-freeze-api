// Import stylesheets
import "./style.css";
import { assertThrowsFrozenError } from "./util";
import { freeze as api01_freeze } from "./api01";
import { freeze as api02_freeze } from "./api02";
import { freeze as api03_freeze } from "./api03";

console.log(api03_freeze({ v: "api03" }));
assertThrowsFrozenError({ v: "api03a", unfreezable: true }, api03_freeze);
console.log(api03_freeze({ v: "api03b", unfreezable: false }));

console.log(api02_freeze({ v: "api02" }));
assertThrowsFrozenError({ v: "api02a", unfreezable: true }, api02_freeze);
console.log(api02_freeze({ v: "api02b", unfreezable: false }));

console.log(api01_freeze({ v: "api01" }));

// Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
