export class Comentario{
    idComentario: Number; 
    Mensaje: String;
    Publicacion_idPublicacion: Number;
    Usuario_Carnet:Number;

    constructor(idComentario:Number,Mensaje:string, Publicacion_idPublicacion:Number,Usuario_Carnet:Number){
        this.idComentario=idComentario
        this.Mensaje=Mensaje
        this.Publicacion_idPublicacion=Publicacion_idPublicacion
        this.Usuario_Carnet=Usuario_Carnet
    }
    
}