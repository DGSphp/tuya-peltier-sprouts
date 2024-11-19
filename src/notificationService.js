import { getDevices, getDeviceStatus } from './tuyaService.js';

export async function checkDevicesStatus(bot, subscribedChats) {
  try {
    const devices = await getDevices();

    for (const device of devices) {
      try {
        const status = await getDeviceStatus(device.id);
        const message = `Device Update: ${device.name}\n${JSON.stringify(status, null, 2)}`;
        
        // Send notification to all subscribed chats
        subscribedChats.forEach(chatId => {
          bot.sendMessage(chatId, message);
        });
      } catch (error) {
        console.error(`Error processing device ${device.id}:`, error);
      }
    }
  } catch (error) {
    console.error('Error checking device status:', error);
  }
}