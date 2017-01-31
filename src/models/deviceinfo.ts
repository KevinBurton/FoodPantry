import { Device } from 'ionic-native';

export class DeviceInfo {
  constructor() {
    this.cordova = Device.cordova;
    this.model = Device.model;
    this.platform = Device.platform;
    this.uuid = Device.uuid;
    this.version = Device.version;
    this.manufacturer = Device.manufacturer
console.log(Device.platform);
  }
  cordova:string;
  model:string;
  platform:string;
  uuid:string;
  version:string;
  manufacturer:string;
}
