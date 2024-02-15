export default interface AvailableGame {
  readonly available: boolean;
  readonly running: boolean;
  readonly path?: string;
}
