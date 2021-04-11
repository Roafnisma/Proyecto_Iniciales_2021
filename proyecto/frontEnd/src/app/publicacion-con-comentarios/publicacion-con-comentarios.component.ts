import { Component, OnInit } from '@angular/core';
import { Catedratico } from '../Modelos/Catedratico';
import { Usuario } from '../Modelos/Usuario';
import { Comentario } from '../Modelos/Comentario';
import {usuarioServicio}from '../servicios/usuarioServicio'
import {ActivatedRoute, Router} from '@angular/router'

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
  publicacion: string; 
  nombreCatedratico:string; 
  nombreUsuario: string;
  idPublicacion: number; 
  catedraticos:Catedratico[]=[]
  fecha: string; 
  constructor(private servicioUsuario:usuarioServicio, private _router:Router, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.nombreCatedratico ="";
    this.nombreUsuario ="";
    this.publicacion = "";
    this.fecha = "";
    this.idPublicacion = 0;
    let carne=localStorage.getItem("carne_publicacion")
    let idPublicacion = Number(this.activatedRoute.snapshot.paramMap.get("idPublicacion"));

    this.servicioUsuario.obtenerPublicacionPorId(idPublicacion).subscribe(
      (result:any[])=>{
        console.log(result);
        this.nombreCatedratico = result[0].catedratico; 
        this.nombreUsuario = result[0].estudiante; 
        this.publicacion = result[0].mensaje;
        this.fecha = result[0].fecha; 
        this.idPublicacion = result[0].idPublicacion;
        this.chargeComments();
      }, 
      (error)=>{
        console.log(error);
        alert("Error al conectarse con el servidor")
      }      
    ); 

  }

  chargeComments(){
    let idPublicacion = Number(this.activatedRoute.snapshot.paramMap.get("idPublicacion"));
    this.servicioUsuario.obtenerComentarios(idPublicacion).subscribe(
      
      (result:any[])=>{
        console.log(result);
        this.comentarios = [];
        for(let comment of result){
          let comentario = new Comentario(comment.idComentario, comment.Mensaje, comment.idPublicacion, 
            0);
          comentario.nombreUsuario = comment.nombreUsuario; 
          this.comentarios.push(comentario);
        }
      },
      (error)=>{
        console.log(error);
        alert("Ocurrió un error de conexión con el servidor.");
      }
    )
  }

  guardarComentario(cuerpo:string){
    let idPublicacion = Number(this.activatedRoute.snapshot.paramMap.get("idPublicacion"));

    
    this.servicioUsuario.guardarComentario(cuerpo, idPublicacion, Number(localStorage.getItem("carne_publicacion"))).subscribe(
      (res:any) => {
        this.chargeComments();
      }, (error) => {
        console.error(error);
        alert("Ocurrió un error al conectar con el servidor.");

      },
    )

    
  }

  verPerfil(){
    this._router.navigate(['/perfil']);

  }

}
