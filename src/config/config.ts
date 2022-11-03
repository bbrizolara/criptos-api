import * as dotenv from "dotenv";

dotenv.config({ path: `.env` });

export const {
  COINMARKET_API_KEY,
  COINMARKET_API_URL,
  COINMARKET_TOTAL_CURRENCIES,
  PORT,
  REDIS_HOST,
  REDIS_PORT,
  REDIS_TIME_OUT,
  APP_SECRET,
  JWT_EXPIRES_IN,
} = process.env;
