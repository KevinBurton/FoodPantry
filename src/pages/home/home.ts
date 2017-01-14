import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map: any = {};
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad(){
    this.map = {
      lat: 42.9430810,
      lng: -89.4758436,
      zoom: 15,
      label: "H",
      info: "Home",
      type: "satelite"
    };

  }
}
