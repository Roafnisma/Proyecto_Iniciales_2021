import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {usuarioServicio}from '../../../app/servicios/usuarioServicio'
import {Router} from '@angular/router'

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {
  carne:Number;
  correo:String;

  constructor(private _router:Router,private servicioUsuario:usuarioServicio) { 
    
  }

  ngOnInit(): void {
  }

  Recuperar(form:NgForm){
    var carne: number=form.value.carne
    var correo: string=form.value.correo
    this.servicioUsuario.validarCorreo(carne, correo).subscribe(
      res => {
        var respuesta: string = res["inicio"];
        console.log("respuesta" + respuesta);
        if (respuesta == "1") {
          console.log("hora 7:35 ");
          alert('Si existe el usuario')
          this._router.navigate(['nuevopassword']);
  
          //console.log("ha ingresado correctamente");
        } else {
          alert('No existe el usuario');
        }
      }, (error) => {
        console.error(error);
      },
    );  
  }
}
