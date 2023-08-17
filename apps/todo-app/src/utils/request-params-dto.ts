import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsString, IsOptional, IsUUID, IsNumberString } from 'class-validator';


export class QueryEmailDto {
  @IsEmail({}, { message: 'Invalid email' })
  public email: string;
}

export class QueryIdDto {
  @IsUUID('4', { message: 'Invalid UUID' })
  public id: string;
}

export class ParamIdDTO {
  constructor(str) {
    this.id = str;
  }
  @IsUUID('4', { message: 'Invalid UUID' })
  id: string;
}
