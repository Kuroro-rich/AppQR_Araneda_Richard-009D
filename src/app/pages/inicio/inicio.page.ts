import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RegistroserviceService } from '../service/registroservice.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private registroService: RegistroserviceService,
              private menuController: MenuController,) { }



ngOnInit() { this.menuController.close("second")

}

mostrarMenu(){
this.menuController.enable(true, 'first')
this.menuController.open('first');
}

}
