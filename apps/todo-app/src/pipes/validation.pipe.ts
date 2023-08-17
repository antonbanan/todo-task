import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { ValidationException } from '../exceptions/validation.exception';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    if(metadata.type === 'param'){
      value = {[metadata.data]: value}
    }
    const obj = plainToClass(metadata.metatype, value);

    const errors = await validate(obj);

    if (errors.length) {
      const errorObject = {};
      errors.forEach((err) => {
        errorObject[err.property] = err.constraints ? Object.values(err.constraints) : 'no message use foe validation';
      });
      throw new ValidationException(errorObject);
    }

    return value;
  }
}
