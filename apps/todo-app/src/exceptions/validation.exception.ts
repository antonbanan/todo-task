import { HttpException, HttpStatus } from '@nestjs/common';

export class ValidationException extends HttpException {
  errorsInfo: object;

  constructor(response) {
    super(response, HttpStatus.BAD_REQUEST);
    this.errorsInfo = response;
  }
}
