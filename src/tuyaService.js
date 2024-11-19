import { tuya } from './config.js';

export async function getDevices() {
  try {
    const response = await tuya.request({
      path: '/v1.0/devices',
      method: 'GET',
    });
    return response.result || [];
  } catch (error) {
    console.error('Error fetching devices:', error);
    throw error;
  }
}

export async function getDeviceStatus(deviceId) {
  try {
    const response = await tuya.request({
      path: `/v1.0/devices/${deviceId}/status`,
      method: 'GET',
    });
    return response.result;
  } catch (error) {
    console.error(`Error fetching device status for ${deviceId}:`, error);
    throw error;
  }
}