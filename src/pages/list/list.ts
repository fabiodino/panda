import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { Storage } from '@ionic/storage';
import { ModalItemCreatePage } from '../modal-item-create/modal-item-create';
import { SQLite } from 'ionic-native';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{id: number, name: string, description: string}>;
  posts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public modalCtrl: ModalController, public http: Http) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.http.get('http://localhost:3000/chests').map(res => res.json()).subscribe( data => this.items.push({id: 1, name: 'a', description: 'b'}));

  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  showCreateItemModal(){
    let profileModal = this.modalCtrl.create(ModalItemCreatePage, this.items);
      profileModal.present();
  }

  removeItem (event, item) {
    for (let i = this.items.length - 1; i >= 0; i--) {
      if (this.items[i].id === item.id) {
        var indexOfItem = this.items.indexOf(item);
        this.items.splice(indexOfItem, 1);
      }
    }
  }
}
