import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoDocenteGuard } from './guards/ingresado-docente.guard';
import { IngresadoGuard } from './guards/ingresado.guard';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QRPageModule),
    canActivate: [IngresadoDocenteGuard]
  },
  {
    path: 'feriados',
    loadChildren: () => import('./pages/feriados/feriados.module').then( m => m.FeriadosPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [IngresadoGuard]
  },
  {
  path: 'escaner',
  loadChildren: () => import('./pages/escaner/escaner.module').then( m => m.EscanerPageModule),
  canActivate: [IngresadoGuard]
  },
  {
    path: 'inicio-profesor',
    loadChildren: () => import('./pages/inicio-profesor/inicio-profesor.module').then( m => m.InicioProfesorPageModule),
    canActivate: [IngresadoDocenteGuard]
  },
  {
    path: 'registro-profesor',
    loadChildren: () => import('./pages/registro-profesor/registro-profesor.module').then( m => m.RegistroProfesorPageModule),
    canActivate: [NoIngresadoGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
