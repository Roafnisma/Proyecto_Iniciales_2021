import { Component, OnInit } from '@angular/core';
import{Usuario} from '../../Modelos/Usuario'
import{usuarioServicio} from '../../servicios/usuarioServicio'
import {Observable,of, throwError } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  Nombres:string;
  Apellidos:string;
  usuarios:Usuario[]=[];
  carne:number;
  codCat:number;
  cuerpo:string;



  constructor(private servicio:usuarioServicio) {
    

   }

  

  ngOnInit(): void {

    let info=JSON.parse(localStorage.getItem("info"))
    this.carne=info.carneUsuario;
    this.codCat=info.noCat;
    this.Nombres=info.nombres;
    this.Apellidos=info.apellidos;
    this.servicio.obtenerUsuario(parseInt(info.carneUsuario)).subscribe(usuarios=>this.usuarios=usuarios);
    console.log('termina ngonInit'+this.usuarios[0])
      
    
   
      
      
    //.subscribe(usuarios=> this.usuarios=usuarios)
    

   // alert(this.Nombres)
  }

  guardarPublicacion(cuer:string){
    this.cuerpo=cuer;

    //alert('antes de llamar al servicio el carnet es: '+this.carne)
    this.servicio.guardarPublicacion(this.cuerpo,this.carne,this.codCat).subscribe(
      res => {
        var respuesta: string = res["inicio"];
        console.log("respuesta" + respuesta);
        if (respuesta == "1") {
          console.log("hora 7:35 ");
          alert('Bienvenido')
          //this.guardarCarne();
          //this._router.navigate(['pantallaPrincipal']);

          //console.log("ha ingresado correctamente");
        } else {
          alert("Credenciales invalidas");
        }
      }, (error) => {
        console.error(error);
      },
    )


    alert(cuer);
  }

  guardarPublicacion2(form:NgForm){
    
    
    console.log(form.value.cuerpo)  }

 

}
