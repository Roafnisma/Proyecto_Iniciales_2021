import { Component, OnInit } from '@angular/core';
import{Publicacion} from '../../Modelos/Publicacion'
import {usuarioServicio} from '../../servicios/usuarioServicio'
import {Router} from '@angular/router'

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  constructor(private servicio:usuarioServicio,private _router:Router) { }

  publicaciones:Publicacion[]=[];

  ngOnInit(): void {

    this.servicio.obtenerPublicaciones().subscribe(publicaciones=>this.publicaciones=publicaciones);


  }

  verComentarios(idPublicacion:number,NoCatedratico:number,Mensaje:string,carne_publicacion:number){
    
    let idPublicacionS:string=idPublicacion+"";
    let NoCatedraticoS:string=NoCatedratico+"";
    let Mensaje2:string=Mensaje;
    let carne_publicacion2=carne_publicacion+"";
    localStorage.setItem("idPublicacion",idPublicacionS);
    localStorage.setItem("NoCatedratico",NoCatedraticoS);
    localStorage.setItem("Mensaje",Mensaje2);
    localStorage.setItem("carne_publicacion",carne_publicacion2);
    this._router.navigate(['publicacionConComentarios']);

  }

}
