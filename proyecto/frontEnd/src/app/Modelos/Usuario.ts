import { usuarioServicio } from "../servicios/usuarioServicio"

export class Usuario{
    carne:number
    Nombres:string
    apellidos:string
    password:string
    correo:string

    constructor(carne:number,nombres:string,apellidos:string,password:string,correo:string){
        this.carne=carne
        this.Nombres=nombres
        this.apellidos=apellidos
        this.password=password
        this.correo=correo
    }

}