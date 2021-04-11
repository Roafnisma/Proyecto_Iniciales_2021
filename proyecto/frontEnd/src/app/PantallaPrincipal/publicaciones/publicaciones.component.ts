import { Component, OnInit } from '@angular/core';
import{Publicacion} from '../../Modelos/Publicacion'
import {usuarioServicio} from '../../servicios/usuarioServicio'
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  constructor(private servicio:usuarioServicio,private _router:Router, private route: ActivatedRoute) { }

  publicaciones:Publicacion[]=[];

  ngOnInit(): void {
    let idCatedratico = Number(this.route.snapshot.paramMap.get("idCatedratico"));
    if(idCatedratico == -1){
      this.servicio.obtenerTodasPublicaciones(idCatedratico).subscribe(
        (result:any[])=>{
          console.log(result);
          for(let publicacion of result){
            let nuevaPublicacion = new Publicacion(publicacion.idPublicacion, publicacion.mensaje, 
              publicacion.carnet, -1);
            nuevaPublicacion.fecha  = publicacion.fecha.split('T')[0];
            nuevaPublicacion.nombreUsuario = publicacion.estudiante;
            nuevaPublicacion.nombreCatedratico = publicacion.catedratico;
            this.publicaciones.push(nuevaPublicacion);
          }
        },
        (error)=>{
          console.log(error);
          alert('Error al contactar con el servidor');
        });
  
    }else{
      this.servicio.obtenerPublicacionesPorCatedratico(idCatedratico).subscribe(
        (result:any[])=>{
          console.log(result);
          for(let publicacion of result){
            let nuevaPublicacion = new Publicacion(publicacion.idPublicacion, publicacion.mensaje, 
              publicacion.carnet, -1);
            nuevaPublicacion.fecha  = publicacion.fecha;
            nuevaPublicacion.nombreUsuario = publicacion.estudiante;
            nuevaPublicacion.nombreCatedratico = publicacion.catedratico;
            this.publicaciones.push(nuevaPublicacion);
          }
        },
        (error)=>{
          console.log(error);
          alert('Error al contactar con el servidor');
        }
  
      )
    }
    

  }

  verComentarios(idPublicacion:number,NoCatedratico:number,Mensaje:string,carne_publicacion:number){
    this._router.navigate(['publicacionConComentarios', idPublicacion]);
  }

}
