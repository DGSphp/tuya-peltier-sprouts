import TelegramBot from 'node-telegram-bot-api';
import { TELEGRAM_BOT_TOKEN } from './config.js';
import { setupCommands } from './telegramCommands.js';
import { checkDevicesStatus } from './notificationService.js';

// Initialize bot with polling
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

// Store chat IDs for notifications
const subscribedChats = new Set();

// Setup command handlers
setupCommands(bot, subscribedChats);

// Check device status every 5 minutes
setInterval(() => checkDevicesStatus(bot, subscribedChats), 5 * 60 * 1000);

console.log('Telegram bot is running...');