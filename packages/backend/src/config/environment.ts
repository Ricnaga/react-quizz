import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export const PORT = Number(process.env.PORT);
