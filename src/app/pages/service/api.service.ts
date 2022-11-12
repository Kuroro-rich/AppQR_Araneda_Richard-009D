import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feriados } from '../pages/Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private Http:HttpClient) { }

  getFeriados(){
    return this.Http.get<Feriados>('https://apis.digital.gob.cl/fl/feriados/2022?offset=1')
  }


}
