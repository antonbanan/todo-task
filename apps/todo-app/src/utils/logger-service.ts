import { Injectable } from '@nestjs/common';
import * as winston from 'winston';
import { createLogger, transports, format } from 'winston';

@Injectable()
export class LoggerService {
  private logger;

  constructor() {
    this.logger = createLogger({
      level: 'info', // Set your desired log level
      format: format.combine(
        format.timestamp(),
        format.json()
      ),
      transports: [
        new transports.Console(),
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
        new transports.File({ filename: 'logs/combined.log' }),
      ],
    });
  }

  log(message: string) {
    this.logger.info(message);
  }

	

  error(message: string, trace: string) {
    this.logger.error(message, { trace });
  }
}

