# Telegram Tuya Bot

This bot connects to Tuya devices and sends notifications through Telegram.

## Setup

1. Create a Telegram bot using BotFather and get the token
2. Create a Tuya developer account and get the client ID and secret
3. Copy the environment variables to `.env`:
   - TELEGRAM_BOT_TOKEN 7994822374:AAEojsu4S_p43diKZQjdpVUSNdKIUrGZ-3Y
   - TUYA_CLIENT_ID 
   - TUYA_CLIENT_SECRET e616422cffba46168ba97c3e97f43f7e
   - TUYA_ENDPOINT https://openapi.tuyaeu.com

## Commands

- `/start` - Subscribe to notifications
- `/stop` - Unsubscribe from notifications
- `/devices` - List all connected devices

## Running the Bot

```bash
npm install
npm start
```