import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import {Usuario}from '../Modelos/Usuario';
import {Curso}from '../Modelos/Curso';
import {Injectable} from "@angular/core"
import {Observable,of, throwError } from 'rxjs';
import {catchError}from 'rxjs/operators'
import { Catedratico } from '../Modelos/Catedratico';
import { Publicacion } from '../Modelos/Publicacion';
import { Comentario } from '../Modelos/Comentario';
@Injectable()

export class usuarioServicio{
    constructor(private http:HttpClient){

    }

    agregarUsuario(carne:number,nombres:string,apellidos:string,password:string,correo:string){
        var data: Usuario=new Usuario(carne,nombres,apellidos,password,correo)
        console.log('lo que se esta mandando es: '+data.Nombres)
        return this.http.post<Usuario>('http://localhost:4000/agregarUsuario',data,{
            headers:new HttpHeaders({
                'Content-Type':'application/json'
            })
        }).pipe(catchError(err=>{
            console.error('Error: '+err)
            return throwError(err)
        }))
    }

    validarCredenciales(carne:number, password: string) {
        return this.http.post('http://localhost:4000/validarCredenciales', {
            carne: carne,
            password: password,

        });
    }

    CambioPassword(carne:number, password: string) {
        return this.http.post('http://localhost:4000/CambioPassword', {
            carne: carne,
            password: password,
        });
    }

    validarCorreo(carne:number, correo:string) {
        return this.http.post('http://localhost:4000/validarCorreo', {
            carne: carne,
            correo: correo,

        });
    }

    obtenerUsuarios():Observable<Usuario[]>{
        return this.http.get<Usuario[]>('http://localhost:4000/obtenerUsuarios');
    }

    obtenerCursos():Observable<Curso[]>{
        return this.http.get<Curso[]>('http://localhost:4000/obtenerCursos');
    }

    obtenerCatedratico():Observable<Catedratico[]>{
        return this.http.get<Catedratico[]>('http://localhost:4000/obtenerCatedratico');
    }

    

    obtenerUsuario(carne:number):Observable<Usuario[]>{
        
        return this.http.get<Usuario[]>('http://localhost:4000/obtenerUsuario/'+carne);
    }

    obtenerComentarios(idPublicacion:number):Observable<Comentario[]>{
        
        return this.http.get<Comentario[]>('http://localhost:4000/obtenerComentarios/'+idPublicacion);
    }

    obtenerUnSoloCatedratico(noCat:number):Observable<Catedratico[]>{
        
        return this.http.get<Catedratico[]>('http://localhost:4000/obtenerUnSoloCatedratico/'+noCat);
    }

    guardarPublicacion(msj:string,carne:number,numCat:number){
        var id=Math.floor(Math.random() * 1000)
        var data: Publicacion=new Publicacion(id,msj,carne,numCat);
        //alert('el carne es: '+carne+'el codigo del cat es: '+data.Catedratico_NoCatedratico)
        //console.log('lo que se esta mandando es: '+data.Nombres)
        return this.http.post<Publicacion>('http://localhost:4000/guardarPublicacion',data,{
            headers:new HttpHeaders({
                'Content-Type':'application/json'
            })
        }).pipe(catchError(err=>{
            console.error('Error: '+err)
            return throwError(err)
        }))
    }

    guardarComentario(msj:string,idPublicacion:number,carnet:number){
        var id=Math.floor(Math.random() * 1000)
        var data: Comentario=new Comentario(id,msj,idPublicacion,carnet);
        //alert('el carne es: '+carne+'el codigo del cat es: '+data.Catedratico_NoCatedratico)
        //console.log('lo que se esta mandando es: '+data.Nombres)
        return this.http.post<Comentario>('http://localhost:4000/guardarComentario',data,{
            headers:new HttpHeaders({
                'Content-Type':'application/json'
            })
        }).pipe(catchError(err=>{
            console.error('Error: '+err)
            return throwError(err)
        }))
    }




    obtenerPublicaciones():Observable<Publicacion[]>{
        return this.http.get<Publicacion[]>('http://localhost:4000/obtenerPublicaciones');
    }


}