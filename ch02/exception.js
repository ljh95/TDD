export class BadParameterException extends Error {
  constructor() {
    super();
  }

  get message() {
    return 'BadParameterException error message';
  }
}
