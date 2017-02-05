import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class ListPage implements OnInit, OnDestroy {
  selectedItem: any;
  icons: string[];
  items: Array<{id:number, name:string, description:string}>;
  posts: any[];
  chestsObservable: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public modalCtrl: ModalController, public http: Http) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  ngOnInit() {
    this.chestsObservable = this.http.get('http://localhost:3000/chests').subscribe(
      data => {
        this.items = data.json();
      },
      error => {
        console.log('Error: ' + error);
      },
      () => {
        console.log('Acabou');
      });
  }

  ngOnDestroy() {

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
