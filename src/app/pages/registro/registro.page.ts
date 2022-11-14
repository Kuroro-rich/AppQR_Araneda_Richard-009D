import { Component, OnInit } from '@angular/core';
import { Usuario, RegistroserviceService } from '../service/registroservice.service';
import { FormGroup, FormControl, FormBuilder , Validators } from '@angular/forms';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  NuevoUsuarios : Usuario = <Usuario>{};
  AntiguoUsuario : Usuario[] = [];
  MustMach: any;

  constructor( private navController: NavController,
              private registroService: RegistroserviceService,
              private alertController: AlertController,
              private fb: FormBuilder,
              private toastController: ToastController,
              private menuController: MenuController) {
                this.formularioRegistro = this.fb.group({ 
                  'nombre': new FormControl("", Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])),
                  'Email': new FormControl("", Validators.required),
                  'password': new FormControl("", Validators.required),
                  'carrera': new FormControl("", Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])), 
                });
                
                  
                
              }
  ngOnInit() {
  }

  async Guardar(){
    var form = this.formularioRegistro.value;
    var error=0;
    if (this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Error...',
        message:  'Los datos ingresados son incorrectos',
        buttons: ['Aceptar']
      })
      await alert.present();
    }
    else{

        this.registroService.getUsuarios().then(datos => {
          this.AntiguoUsuario=datos;
          if(this.AntiguoUsuario== null){
            this.NuevoUsuarios.tipo = "Estudiante";
            this.NuevoUsuarios.nombreUsuario = form.nombre;
            this.NuevoUsuarios.correoUsuario = form.correo;
            this.NuevoUsuarios.passwordUsuario = form.password;
            this.NuevoUsuarios.carUsuario = form.carrera;
            this.registroService.addUsuario(this.NuevoUsuarios).then(dato =>{
              this.NuevoUsuarios = <Usuario>{};
              this.showToast('Usuario Creado');
            })
            this.formularioRegistro.reset();
            this.navController.navigateRoot('inicio-sesion'); 
          }
          else{
            for (let obj of this.AntiguoUsuario){
              if(form.correo == obj.correoUsuario){
                this.showToast('Error, este Email ya existe')
                error=1;
              }
            }
            if(error == 0){
              this.NuevoUsuarios.tipo = "Estudiante";
              this.NuevoUsuarios.nombreUsuario = form.nombre;
              this.NuevoUsuarios.correoUsuario = form.correo;
              this.NuevoUsuarios.passwordUsuario = form.password;
              this.NuevoUsuarios.carUsuario = form.carrera;
              this.registroService.addUsuario(this.NuevoUsuarios).then(dato =>{
                this.NuevoUsuarios = <Usuario>{};
                this.showToast('Usuario Creado');
              })
              this.formularioRegistro.reset();
              this.navController.navigateRoot('inicio-sesion');            
            }
          }
          

        })

      
      
    }
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message : msg,
      duration: 1500
    })
    toast.present();
  }



}
