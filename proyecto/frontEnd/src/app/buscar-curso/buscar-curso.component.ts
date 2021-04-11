import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { usuarioServicio } from '../servicios/usuarioServicio'
import { Curso } from '../Modelos/Curso'

@Component({
  selector: 'app-buscar-curso',
  templateUrl: './buscar-curso.component.html',
  styleUrls: ['./buscar-curso.component.css']
})
export class BuscarCursoComponent implements OnInit {
  cursos: Curso[] = []
  catedraticosDelCurso:any[] = [];
  filterPost = '';
  cursoSeleccionado = '';

  constructor(private _router: Router, private servicio: usuarioServicio) { }

  ngOnInit(): void {

    this.servicio.obtenerCursos().subscribe(
      (result) => {
        this.cursos = result;
        
      }, 
      (error) => {
        console.log(error);
      })

  }

  agregarAAprobados(idCurso) {
    var nota = parseInt(window.prompt("¿Cual fue tu nota?", ""), 10);

    if (isNaN(nota) || nota > 100 || nota < 61) {
      alert("La nota debe de ser un número entre 61 y 100.")
      return;
    }
    let carne = localStorage.getItem("carne")
    this.servicio.marcarCursoComoAprobado(carne, idCurso, nota).subscribe(
      (result) => {
        alert(result.mensaje);
      },
      (error) => {
        console.log(error);
      }
    );

  }

  verCatedraticos(idCurso, nombreCurso){
    this.cursoSeleccionado = nombreCurso;
    this.servicio.getCatedraticosPorCurso(idCurso).subscribe(
      (result)=>{
        this.catedraticosDelCurso = result;
        console.log(result)
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  
  publicar(NoCatedratico:number,Nombres:string,Apellidos:string){
    let carne=localStorage.getItem("carne")

    //alert('los datos son:'+Nombres+Apellidos+NoCatedratico.toString());
    let info={
      nombres:Nombres,
      apellidos:Apellidos,
      noCat:NoCatedratico,
      carneUsuario:carne,
      coords:{lat:10,lng:-10}


    }

    localStorage.setItem("info",JSON.stringify(info))
    this._router.navigate(['publicacion'])


  }

  verOpiniones(idCat: number){
    this._router.navigate(['publicaciones/', idCat]);
  }

}
