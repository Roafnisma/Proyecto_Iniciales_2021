import {Router} from '@angular/router'
import { Component, OnInit } from '@angular/core';
import {usuarioServicio} from '../servicios/usuarioServicio';
import{Usuario}from '../Modelos/Usuario'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {
  Nombres:String;
  Apellidos:String;
  Correo:String;
  usuarios:Usuario[]=[];
  
  constructor(private router_:Router, private servicio:usuarioServicio) { }
  filterPost='';

  

  ngOnInit(): void {
    this.obtenerLocalStorage()
  }

  obtenerLocalStorage(){
    let carne=Number(localStorage.getItem("carne_publicacion"))
    this.servicio.obtenerUsuario(carne).subscribe(usuario=>this.usuarios=usuario);
    //let carne=localStorage.getItem("carne")
    //let persona=JSON.parse(localStorage.getItem("persona"))
    //this.carne=parseInt(carne);
    //console.log(nombre)
    //console.log(persona.nombre)

  }

}

