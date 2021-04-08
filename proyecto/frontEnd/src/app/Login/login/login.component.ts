import { Component, OnInit } from '@angular/core';

import {NgForm}from '@angular/forms'
import {Router} from '@angular/router'
import {usuarioServicio}from '../../servicios/usuarioServicio'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre:String;
  apellido:String;
  carne:Number;
  password:String;
  correo: String;


  
  constructor(private _router:Router,private servicioUsuario:usuarioServicio) {
    
    
  }

  ngOnInit(): void {
  }

  cambiarARecuperarPassword() {
    alert('puedes recuperar tu contraseña aqui: ')
    this._router.navigate(['recuperarPassword']);
  }

  cambiarComponente(){
    //alert('va a cambiar')
    this._router.navigate(['registrarse']);
  }

  guardarCarne(){
    var carne2=this.carne.toString();
    
    localStorage.setItem("carne",carne2)
  }

  guardarCarneLocalStorage(){
    let nombre:string='fernando'
    let persona={
      nombre:"juan",
      edad:18,
      coords:{lat:10,lng:-10}


    }

    localStorage.setItem("nombre",nombre);
    localStorage.setItem("persona",JSON.stringify(persona));

  }

  obtenerLocalStorage(){
    let nombre=localStorage.getItem("nombre")
    let persona=JSON.parse(localStorage.getItem("persona"))

    console.log(nombre)
    console.log(persona.nombre)

  }



  iniciarSesion(form:NgForm){
   
    var carne: number=form.value.carne
    var password: string=form.value.password

    this.servicioUsuario.validarCredenciales(carne, password).subscribe(
      res => {
        var respuesta: string = res["inicio"];
        console.log("respuesta" + respuesta);
        if (respuesta == "1") {
          console.log("hora 7:35 ");
          alert('Bienvenido')
          this.guardarCarne();
          this._router.navigate(['pantallaPrincipal']);

          //console.log("ha ingresado correctamente");
        } else {
          alert("Credenciales invalidas");
        }
      }, (error) => {
        console.error(error);
      },
    );
  }
}
