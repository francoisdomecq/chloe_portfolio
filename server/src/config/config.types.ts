import * as Joi from 'joi';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppConfig } from './app.config';
import { AuthConfig } from './auth.config';

export interface ConfigType {
  app: AppConfig;
  database: TypeOrmModuleOptions;
  auth: AuthConfig;
}

export const appConfigSchema = Joi.object({
  APP_MESSAGE_PREFIX: Joi.string().required().default('chloe-gaillard'),

  DB_HOST: Joi.string().required().default('localhost'),
  DB_PORT: Joi.number().required().default(5432),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_SYNCHRONIZE: Joi.number().default(0),

  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES_IN: Joi.string().required(),
});
