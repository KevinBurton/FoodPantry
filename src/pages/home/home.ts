import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {  IMarker } from '../../models/marker';

import { MapService } from '../../services/map.service';
import { DeviceService } from '../../services/device.service';

import { DeviceInfo } from '../../models/deviceinfo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  deviceInfo: DeviceInfo;
  markers: IMarker[];
  map: any = {};
  constructor(public navCtrl: NavController,
              public _mapService: MapService,
              public _deviceService: DeviceService) {
    this.deviceInfo = this._deviceService.getDeviceInfo();
  }
  ionViewDidLoad(){
    this._mapService.getMarkers()
      .subscribe(
        // it worked
        (markers) => { this.markers = markers; },
        // error
        (err) => { console.log(err); }
      );
    this.map = {
      lat: 42.9430810,
      lng: -89.4758436,
      zoom: 17,
      label: "H",
      info: "Home",
      type: "satelite"
    };

  }
}
