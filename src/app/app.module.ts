import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ModalItemCreatePage } from '../pages/modal-item-create/modal-item-create';
import { ListPage } from '../pages/list/list';
import { Storage } from '@ionic/storage';

import {ServiceProvider} from '../providers/service-provider';

export function provideStorage () {
  return new Storage(['sqlite', 'websql', 'indexeddb'], {name: '__mydb'});
}

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ModalItemCreatePage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ModalItemCreatePage,
  ],
  providers: [ServiceProvider, {
    provide: ErrorHandler, useClass: IonicErrorHandler,
  }, {
    provide: Storage, useFactory: provideStorage,
  }]
})
export class AppModule {}
