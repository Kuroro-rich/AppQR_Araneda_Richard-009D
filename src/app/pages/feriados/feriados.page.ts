import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {

  feriados:any;
  constructor(private ApiService:ApiService,
              private menuController: MenuController) { }

  ngOnInit() {
    this.ApiService.getFeriados().subscribe(resp => {
      this.feriados=resp;
  }
  mostrarMenu(){
    this.menuController.open('first');
}
