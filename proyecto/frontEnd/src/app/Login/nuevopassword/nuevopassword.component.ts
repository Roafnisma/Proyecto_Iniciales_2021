import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { usuarioServicio } from '../../servicios/usuarioServicio';
import {Router} from '@angular/router'

@Component({
  selector: 'app-nuevopassword',
  templateUrl: './nuevopassword.component.html',
  styleUrls: ['./nuevopassword.component.css']
})
export class NuevopasswordComponent implements OnInit {
  carne:Number;
  password:String;

  constructor(private _router:Router,private servicioUsuario:usuarioServicio) { }

  ngOnInit(): void {
  }

  Nuevo(form:NgForm){
    var carne: number=form.value.carne;
    var password: string=form.value.password;
    this.servicioUsuario.CambioPassword(carne, password).subscribe(
      res => {
        var respuesta: string = res["inicio"];
        console.log("respuesta" + respuesta);
        if (respuesta == "1") {
          console.log("hora 7:35 ");
          alert('Su contraseña se ha cambiado')
          this._router.navigate(['login']);

          //console.log("ha ingresado correctamente");
        } else {
          alert("Su contraseña se ha cambiado");
          this._router.navigate(['login']);
        }
      }, (error) => {
        console.error(error);
      },
    );
  }

}
