import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { StatusBar, SQLite } from 'ionic-native';

/*
  Generated class for the ModalItemCreate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-item-create',
  templateUrl: 'modal-item-create.html'
})
export class ModalItemCreatePage {
  description: any;
  name: any;
  items: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, platform: Platform) {
    this.items = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalItemCreatePage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  saveItem() {
    /*this.items.push({
      id: this.items.length + 1,
      title: this.name,
      note: this.description,
      icon: 'beer',
    })*/
  }
}
