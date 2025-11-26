export * from './auth.api.ts';

class HTTP_CODES {
  static readonly OK = 200;
  static readonly CREATED = 201;

  static readonly VALIDATION_FAILURE = 400;
  static readonly UNAUTHORIZED = 401;
  static readonly FORBIDDEN = 403;
  static readonly NOT_FOUND = 404;
  static readonly CAN_NOT_CRUD = 422;
  static readonly TOO_MANY_REQUESTS = 429;
  static readonly SERVER_ERROR = 500;
}

export { HTTP_CODES };
