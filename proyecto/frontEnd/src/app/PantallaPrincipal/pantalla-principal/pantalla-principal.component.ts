import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Catedratico } from 'src/app/Modelos/Catedratico';
import {Usuario} from '../../Modelos/Usuario'
import {usuarioServicio} from '../../servicios/usuarioServicio'

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})
export class PantallaPrincipalComponent implements OnInit {
  curso:String;
  usuarios:Usuario[]=[];
  catedraticos:Catedratico[]=[];
  carne:number;
  
  constructor(private router_:Router, private servicio:usuarioServicio) { }
  filterPost='';

  ngOnInit(): void {
    this.obtenerLocalStorage()
    this.servicio.obtenerUsuarios().subscribe(usuarios=> this.usuarios=usuarios)
    this.servicio.obtenerCatedratico().subscribe(catedraticos=> this.catedraticos=catedraticos)
  }

  publicar(NoCatedratico:number,Nombres:string,Apellidos:string){
    //alert('los datos son:'+Nombres+Apellidos+NoCatedratico.toString());
    let info={
      nombres:Nombres,
      apellidos:Apellidos,
      noCat:NoCatedratico,
      carneUsuario:this.carne,
      coords:{lat:10,lng:-10}


    }

    localStorage.setItem("info",JSON.stringify(info))
    this.router_.navigate(['publicacion'])


  }

  verOpiniones(idCat: number){
    this.router_.navigate(['publicaciones/', idCat]);
  }

  buscarCursos(){
    this.router_.navigate(['buscarCurso'])
  }

  obtenerLocalStorage(){
    let carne=localStorage.getItem("carne")
    //let persona=JSON.parse(localStorage.getItem("persona"))
    this.carne=parseInt(carne);
    //console.log(nombre)
    //console.log(persona.nombre)

  }

  salir(){
    this.router_.navigate(['login'])

  }

}
