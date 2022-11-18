import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RegistroserviceService } from '../service/registroservice.service';

@Component({
  selector: 'app-inicio-profesor',
  templateUrl: './inicio-profesor.page.html',
  styleUrls: ['./inicio-profesor.page.scss'],
})
export class InicioProfesorPage implements OnInit {

  constructor(private menuController: MenuController,
    private registroService: RegistroserviceService) { }

ngOnInit() { this.menuController.close("first")
}

mostrarMenu(){
this.menuController.enable(true, 'second')
this.menuController.open('second');

}

Usuario=localStorage.getItem('Email');
Nombre: String;
Promesa=this.registroService.ObtenerDocente(this.Usuario).then((value) =>{
this.Nombre=value.nomDocente;
});

}