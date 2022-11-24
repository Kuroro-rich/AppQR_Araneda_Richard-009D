import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { QRPageRoutingModule } from './qr-routing.module';
import {QRCodeModule} from 'angularx-qrcode';

import { QRPage } from './qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    QRCodeModule,
    QRPageRoutingModule
  ],
  declarations: [QRPage]
})
export class QRPageModule {}
