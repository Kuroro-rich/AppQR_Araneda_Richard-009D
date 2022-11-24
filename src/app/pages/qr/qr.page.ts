import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage  {
  SeccionForm: FormGroup;
  qrCodeString='';
  constructor(private menuController : MenuController,
              private alertController: AlertController,
              private fb: FormBuilder) {
    

    this.SeccionForm=fb.group({ 
      'seccion' : new FormControl("", Validators.required)
    })
   }

   ngOnInit() {
    document.getElementById("qr").style.display="none";
    document.getElementById("icon").style.display="block";
  }


  tiempo2 = new Date().toLocaleTimeString('en-US', { hour12: false, 
    hour: "numeric", 
    minute: "numeric"});
  tiempo = new Date();
  fecha= this.tiempo.getDate() + "/" + (this.tiempo.getMonth()+1) + "/" + this.tiempo.getFullYear() + " " + this.tiempo2;

  async Generar(texto) {
    this.qrCodeString = this.fecha + " " + texto;
  }

  mostrarMenu(){
    this.menuController.enable(true, 'second')
    this.menuController.open('second');
  }


  async Generar2() {
    var f = this.SeccionForm.value;
    if(this.SeccionForm.invalid){
      this.alertMsg();
    }
    else{
      this.qrCodeString = this.fecha + " " + f.seccion;
      document.getElementById("icon").style.display="none";
      document.getElementById("qr").style.display="block";
      document.getElementById("qr").style.alignItems="center";
      document.getElementById("qr").style.display="flex";
      document.getElementById("qr").style.width="100%";
      document.getElementById("qr").style.marginTop="30px";
      document.getElementById("qr").style.fontSize="140px";
      const alert = await this.alertController.create({
        header: "QR Generado",
        message: "Generado Con exito ",
        buttons: ['OK'],
        mode:"ios",
      });
  
      await alert.present();
    }
    
  }



  async alertMsg(){
    const alert = await this.alertController.create({ 
      header: 'Error..',
      mode: 'ios',
      message:  'Si desea generar un QR primero debe seleccionar la sección',
      buttons: ['Aceptar']
    });
    await alert.present();
    return;
  }




}