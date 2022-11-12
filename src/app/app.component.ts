import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes : Componente [] = [
   { 
    icon: 'home-outline',
    name: 'Inicio',
    redirecTo: '/inicio'
    },
    { 
    icon: 'qr-code-outline',
    name: 'Escaneo QR',
    redirecTo: '/escaner'
    },
   { 
    icon: 'calendar-outline',
    name: 'Feriados',
    redirecTo: '/feriados'
    },

  ];
}