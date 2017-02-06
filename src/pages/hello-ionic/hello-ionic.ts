import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import {ServiceProvider} from '../../providers/service-provider';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  tesouros:any[];
  constructor(
    public storage: Storage,
    public service: ServiceProvider
  ) {
    storage.set('title', 'Hello Ionic!');
    this.getData();
  }
  getData() {
    this.service.getData()
      .subscribe(
        data=> this.tesouros = data,
        err=> console.log(err)
      )
  }
}
