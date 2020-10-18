export class ThawError extends Error {
  constructor(private thing: unknown) {
    super("Can't thaw that thing! 🔆");
  }
}
