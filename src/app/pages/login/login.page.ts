import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder
 } from '@angular/forms';
 import { NavController } from '@ionic/angular';
import { RegistroserviceService,Usuario,Docente } from '../service/registroservice.service'; 
import { AlertController, MenuController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  usuarios : Usuario[] = [];
  docente : Docente[] = [];


  constructor(public fb: FormBuilder, 
              private menuController: MenuController,
              private navController: NavController,
              private registroService: RegistroserviceService,
              private alertController: AlertController,) {
    this.formularioLogin = this.fb.group({
      'Email': new FormControl ("",Validators.required),
      'password': new FormControl ("",Validators.required),
      'tipo': new FormControl ("",Validators.required),
    })

   }

  ngOnInit() {
  }

  async Ingresar(){
    var f = this.formularioLogin.value; 
    var a = 0;
    var b;
    if(this.formularioLogin.invalid)
    {
      this.alertMsg();
    }
    else{
      if( f.tipo == "Estudiante"){
        this.registroService.getUsuarios().then(datos => { 
          this.usuarios=datos;
          if (this.usuarios == null){
            this.alertMsg();
          }
          else{
            for (let obj of this.usuarios){
              if (f.tipo == obj.tipo && f.correo == obj.correoUsuario && f.password==obj.passwordUsuario){
                a=1;
                b=obj.correoUsuario;
                console.log('ingresado');
                localStorage.setItem('correo', b)
                localStorage.setItem('ingresado1', 'true');
                this.navController.navigateRoot('inicio'); //Habilitamos page de inicio una vez logueado
              }
  
          }//Fin del ciclo FOR
          if (a==0){
            this.alertMsg();
          }
          }
          
      });
      }
      else{
        this.registroService.getDocente().then(datos2 => {
          this.docente=datos2;
          if (this.docente == null){
            this.alertMsg();
          }
          else{
            for (let obj of this.docente){
              if (f.tipo == obj.tipo && f.correo == obj.EmailDocente && f.password==obj.passwordDocente){
                a=1;
                b=obj.nombreDocente;
                console.log('ingresado');
                localStorage.setItem('ingresado2', 'true');
                localStorage.setItem('nombre', b)
                this.navController.navigateRoot('inicio-docente');
              }
  
          }
          if (a==0){
            this.alertMsg();
          }
          }
          
        })
      }
    }
    
    
    

}
async alertMsg(){
  const alert = await this.alertController.create({ 
    header: 'Error..',
    mode: 'ios',
    message:  'Los datos ingresados son incompletos o son incorrectos',
    buttons: ['Aceptar']
  });
  await alert.present();
  return;
}

}
