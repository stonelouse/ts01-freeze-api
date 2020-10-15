export class FrozenError extends Error {
  constructor(private thing: unknown) {
    super("Can't freeze that thing");
  }
}
