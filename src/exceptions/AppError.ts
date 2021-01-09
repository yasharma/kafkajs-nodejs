import { IErrorResponse } from '../models/response/IErrorResponse';

export class AppError extends Error {
  constructor(protected type: string, description: string, protected statusCode = 400) {
    super(description);
  }

  getResponse(): IErrorResponse {
    return {
      error: this.type,
      error_description: this.message,
    };
  }

  getStatusCode() {
    return this.statusCode;
  }
}
