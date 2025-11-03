import type { Dialect, Options } from 'sequelize';
import { Sequelize } from 'sequelize';
import z from 'zod';
import { initModels } from '../models/index.ts';

const DIALECTS = [
  'mysql',
  'postgres',
  'sqlite',
  'mariadb',
  'mssql',
  'db2',
  'snowflake',
  'oracle',
] as const satisfies Dialect[];

const env = z
  .object({
    DB_DIALECT: z.enum(DIALECTS),
    DB_DATABASE: z.string(),
    DB_USERNAME: z.string(),
    DB_PASSWORD: z.string(),
    DB_HOST: z.string(),
    DB_PORT: z.coerce.number().int().positive(),
  })
  .parse(process.env);

const options = {
  dialect: env.DB_DIALECT,
  database: env.DB_DATABASE,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  host: env.DB_HOST,
  port: env.DB_PORT,
  // Uncomment if you don't want to see the executed SQL requests in the logs
  // logging: false,
} as Options;

const db = new Sequelize(options);

initModels(db);

export { db };
