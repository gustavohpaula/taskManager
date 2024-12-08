import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();


const envSchema = z.object({
  NODE_ENV: z.enum(['production', 'test', 'development']).default('production'),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string(), 
  SECRET_KEY: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error('Invalid environment variable!', _env);

  throw new Error('Invalid environment variable');
}

export const env = _env.data;
