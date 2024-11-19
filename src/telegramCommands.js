import { getDevices, getDeviceStatus } from './tuyaService.js';

export function setupCommands(bot, subscribedChats) {
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    subscribedChats.add(chatId);
    bot.sendMessage(chatId, 'Welcome! You will now receive notifications from your Tuya devices.');
  });

  bot.onText(/\/stop/, (msg) => {
    const chatId = msg.chat.id;
    subscribedChats.delete(chatId);
    bot.sendMessage(chatId, 'You have unsubscribed from Tuya device notifications.');
  });

  bot.onText(/\/devices/, async (msg) => {
    const chatId = msg.chat.id;
    try {
      const devices = await getDevices();
      const deviceList = devices.map(device => 
        `📱 ${device.name} (${device.id})\nStatus: ${device.status ? 'Online' : 'Offline'}`
      ).join('\n\n');
      
      bot.sendMessage(chatId, deviceList ? `Your Devices:\n\n${deviceList}` : 'No devices found.');
    } catch (error) {
      bot.sendMessage(chatId, 'Error fetching devices. Please try again later.');
    }
  });
}