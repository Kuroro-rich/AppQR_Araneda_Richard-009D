import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { RegistroserviceService,Usuario, Docente } from '../service/registroservice.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-registro-profesor',
  templateUrl: './registro-profesor.page.html',
  styleUrls: ['./registro-profesor.page.scss'],
})
export class RegistroProfesorPage implements OnInit {

  formularioRegistroProfesor: FormGroup;
  NuevoDocente : Usuario = <Usuario>{};
  AntiguoUsuario : Usuario[] = [];

  constructor(private alertController: AlertController,
              private navController: NavController,
              private registroService: RegistroserviceService,
              private menuController: MenuController,
              private toastController: ToastController,
              private fb: FormBuilder ) {
                this.formularioRegistroProfesor = this.fb.group({ 
                  'nombre': new FormControl("", Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]*$')])),
                  'Email': new FormControl("", Validators.required),
                  'password': new FormControl("", Validators.required),
                  'tipo': new FormControl("", Validators.required),
                }); 
                

              }

  ngOnInit() {
  }

  noIniciado(){
    this.menuController.enable(false);
  }
  
  async CrearProfesor(){
    var form = this.formularioRegistroProfesor.value;
    var error=0;
    if (this.formularioRegistroProfesor.invalid){
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
            this.NuevoDocente.tipo = "Docente";
            this.NuevoDocente.nombreUsuario = form.nombre;
            this.NuevoDocente.correoUsuario = form.Email;
            this.NuevoDocente.passwordUsuario = form.password;
            this.registroService.addUsuario(this.NuevoDocente).then(dato =>{
              this.NuevoDocente = <Usuario>{};
              this.showToast('Docente Creado');
            })
            this.formularioRegistroProfesor.reset();
            this.navController.navigateRoot('inicio'); 
          }
          else{
            for (let obj of this.AntiguoUsuario){
              if(form.correo == obj.correoUsuario){
                this.showToast('Error, este Email ya existe')
                error=1;
              }
            }
            if(error == 0){
              this.NuevoDocente.tipo = "Docente";
              this.NuevoDocente.nombreUsuario = form.nombre;
              this.NuevoDocente.correoUsuario = form.Email;
              this.NuevoDocente.passwordUsuario = form.password;
              this.registroService.addUsuario(this.NuevoDocente).then(dato =>{
                this.NuevoDocente = <Usuario>{};
                this.showToast('Docente Creado');
              })
              this.formularioRegistroProfesor.reset();
              this.navController.navigateRoot('inicio');            
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














