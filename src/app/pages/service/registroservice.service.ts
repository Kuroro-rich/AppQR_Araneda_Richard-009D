import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Usuario{
  nombreUsuario: string;
  correoUsuario:string;
  passwordUsuario: string;
  tipo:string;
}

export interface Docente{
  nombreDocente: string;
  EmailDocente:string;
  passwordDocente:string;
  tipo:string;
}

const USERS_KEY = 'my-usuarios';  

@Injectable({
  providedIn: 'root'
})
export class RegistroserviceService {

  

  private _storage: Storage;
  AntiguoUsuario: Docente[]=[];
  NuevoUsuarios: Usuario[]=[];
  UsuarioEncontrado: any;
  ObtenerDocente: any;
 
  constructor(private storage: Storage) { 
    this.init();
   }

   //creamos el storage de Usuarios
    async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  //creamos un Usuario
  async addUsuario(dato: Usuario):Promise<any>{
   return this.storage.get(USERS_KEY).then((datos: Usuario[])=>{ 
     if(datos){
       datos.push(dato);    //agregamos un objeto al storage
       return this.storage.set(USERS_KEY,datos);
     }
     else{
       return this.storage.set(USERS_KEY, [dato]);
     }
   })
  }//findelmetodo

  
  async getUsuarios():Promise<Usuario[]>{
    return this.storage.get(USERS_KEY);
  }

  async getDocente():Promise<Docente[]>{
    return this.storage.get(USERS_KEY);
  }


}