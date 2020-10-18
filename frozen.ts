// `T` represents the type parameter
export type Frozen<T> = T & {
  // `&` is the syntax for an `intersection type`
  frozen: string;
};
