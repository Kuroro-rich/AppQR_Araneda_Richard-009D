import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-escaner',
  templateUrl: './escaner.page.html',
  styleUrls: ['./escaner.page.scss'],
})
export class EscanerPage implements OnInit {

  constructor(private alertController: AlertController,
              private menuController: MenuController) { }

  ngOnInit() {
  }
  async escaner() {
    const alert = await this.alertController.create({
      header: 'Asistencia confirmada',
      message: 'Escaneado correctamente',
      buttons: ['OK'],
      mode:"ios",
    });

    await alert.present();
  }

  mostrarMenu(){
      this.menuController.enable(true, 'first')
      this.menuController.open('first');
  }
  
}
