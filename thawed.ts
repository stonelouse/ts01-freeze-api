import { Frozen } from "./frozen";

export type Thawed<T> = T extends Frozen<infer R> ? R : never;
