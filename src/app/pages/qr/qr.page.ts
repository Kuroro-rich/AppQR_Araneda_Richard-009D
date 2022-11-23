import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage  {
  qrCodeString='Bienvenido a RegistrApp';
  scannedResult: any;
  constructor() {}

  usuario={
    nom:'',
  }

  GenerarQr(){
    this.qrCodeString=this.usuario.nom;
  }

  VerQr(){
    this.scannedResult = this.qrCodeString;
  }
}