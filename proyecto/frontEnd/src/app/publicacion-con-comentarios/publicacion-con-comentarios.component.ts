import { Component, OnInit } from '@angular/core';
import { Catedratico } from '../Modelos/Catedratico';
import { Usuario } from '../Modelos/Usuario';
import { Comentario } from '../Modelos/Comentario';
import {usuarioServicio}from '../servicios/usuarioServicio'
import {Router} from '@angular/router'

@Component({
  selector: 'app-publicacion-con-comentarios',
  templateUrl: './publicacion-con-comentarios.component.html',
  styleUrls: ['./publicacion-con-comentarios.component.css']
})
export class PublicacionConComentariosComponent implements OnInit {
  mensaje:string;
  cuerpo:string;
  usuarios:Usuario[]=[]
  comentarios:Comentario[]=[]
  
  catedraticos:Catedratico[]=[]

  constructor(private servicioUsuario:usuarioServicio, private _router:Router) { }

  ngOnInit(): void {
    let carne=localStorage.getItem("carne_publicacion")
    let NoCat=localStorage.getItem("NoCatedratico")
    let NoPublicacion=Number(localStorage.getItem("idPublicacion"))
    let NoCat2=Number(NoCat)
    let carne2=Number(carne)
    this.servicioUsuario.obtenerComentarios(NoPublicacion).subscribe(comentario=>this.comentarios=comentario)
    this.servicioUsuario.obtenerUsuario(carne2).subscribe(usuario=>this.usuarios=usuario)
    this.servicioUsuario.obtenerUnSoloCatedratico(NoCat2).subscribe(catedratico=>this.catedraticos=catedratico)
    //this.usuario=this.usuarios[0].Nombres
    this.mensaje=localStorage.getItem("Mensaje");
  }

  guardarComentario(cuerpo:string){
    
    
    this.servicioUsuario.guardarComentario(cuerpo,Number(localStorage.getItem("idPublicacion")),Number(localStorage.getItem("carne"))).subscribe(
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
          window.location.reload()
        }
      }, (error) => {
        console.error(error);
      },
    )

    
  }

  verPerfil(){
    this._router.navigate(['/perfil']);

  }

}
