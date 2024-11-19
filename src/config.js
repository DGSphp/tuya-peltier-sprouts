import dotenv from 'dotenv';
import { TuyaContext } from '@tuya/tuya-connector-nodejs';

dotenv.config();

export const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export const tuya = new TuyaContext({
  baseUrl: process.env.TUYA_ENDPOINT,
  accessKey: process.env.TUYA_CLIENT_ID,
  secretKey: process.env.TUYA_CLIENT_SECRET,
});