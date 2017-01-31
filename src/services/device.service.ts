import { Injectable } from '@angular/core';
import { DeviceInfo } from '../models/deviceinfo';


@Injectable()
export class DeviceService {
  getDeviceInfo() : DeviceInfo {
      return new DeviceInfo();
  }
}
