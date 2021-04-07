import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {usuarioServicio}from '../servicios/usuarioServicio'
import{Curso}from '../Modelos/Curso'

@Component({
  selector: 'app-buscar-curso',
  templateUrl: './buscar-curso.component.html',
  styleUrls: ['./buscar-curso.component.css']
})
export class BuscarCursoComponent implements OnInit {
  cursos:Curso[]=[]
  filterPost=''

  constructor(private _router:Router,private servicio:usuarioServicio) { }

  ngOnInit(): void {

    this.servicio.obtenerCursos().subscribe(cursos=>this.cursos=cursos)

    
  }

}
