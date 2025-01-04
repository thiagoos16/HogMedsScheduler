import { z } from 'zod';
import 'dotenv/config';

const envSchema = z.object({
    PORT: z.string().nonempty().transform(Number),
    MONGO_URI: z.string().nonempty(),
    JWT_SECRET: z.string().min(8, 'The JWT secret must be at least 8 characters long'),
    EMAIL_SENDER: z.string().email('The EMAIL_SENDER must be a valid e-mail'),
    EMAIL_PROVIDER_KEY: z.string().nonempty()
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
    console.error('Invalid environment variables!', parsedEnv.error.format());
    
    throw new Error('Invalid environment variables.')
}

export const env = parsedEnv.data;
