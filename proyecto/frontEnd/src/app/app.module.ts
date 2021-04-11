import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import {RouterModule,Routes}from '@angular/router'
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrarseComponent } from './Registrarse/registrarse/registrarse.component';
import { usuarioServicio } from './servicios/usuarioServicio';
import { PantallaPrincipalComponent } from './PantallaPrincipal/pantalla-principal/pantalla-principal.component';
import { RecuperarComponent } from './Login/recuperar/recuperar.component';
import { NuevopasswordComponent } from './Login/nuevopassword/nuevopassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AcordionComponent } from './acordion/acordion.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { PublicacionComponent } from './PantallaPrincipal/publicacion/publicacion.component';
import { PublicacionesComponent } from './PantallaPrincipal/publicaciones/publicaciones.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicacionConComentariosComponent } from './publicacion-con-comentarios/publicacion-con-comentarios.component';
import { BuscarCursoComponent } from './buscar-curso/buscar-curso.component';
import { FiltroCursoPipe } from './pipes/filtro-curso.pipe';
import { CatedraticosPorCursoComponent } from './catedraticos-por-curso/catedraticos-por-curso.component';

const Rutas:Routes=[

  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'registrarse',component:RegistrarseComponent},
  {path:'pantallaPrincipal',component:PantallaPrincipalComponent},{
    path:'recuperarPassword', component: RecuperarComponent
  },
  {path:'publicaciones/:idCatedratico',component:PublicacionesComponent},
  {path:'publicacion',component:PublicacionComponent},
  {path:'nuevopassword', component: NuevopasswordComponent},
  {path:'acordion',component:AcordionComponent},
  {path:'perfil',component:PerfilComponent},
  {path:'publicacionConComentarios/:idPublicacion',component:PublicacionConComentariosComponent},
  {path:'buscarCurso',component:BuscarCursoComponent},
  {path:'catedraticos-por-curso:/idCurso', component:CatedraticosPorCursoComponent}



]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarseComponent,
    PantallaPrincipalComponent,
    RecuperarComponent,
    NuevopasswordComponent,
    AcordionComponent,
    FiltroPipe,
    PublicacionComponent,
    PublicacionesComponent,
    PerfilComponent,
    PublicacionConComentariosComponent,
    BuscarCursoComponent,
    FiltroCursoPipe,
    CatedraticosPorCursoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(Rutas),
    BrowserAnimationsModule,
    
  ],
  providers: [usuarioServicio,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
