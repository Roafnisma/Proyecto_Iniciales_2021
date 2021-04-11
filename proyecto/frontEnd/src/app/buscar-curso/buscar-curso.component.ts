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
  filterPost = ''

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

}
