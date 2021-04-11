export class Publicacion{
    idPublicacion: Number; 
    Mensaje: String;
    Usuario_Carnet: number;
    Catedratico_NoCatedratico:number;
    nombreUsuario: string; 
    fecha: string; 
    nombreCatedratico: string;

    constructor(id:number, msj:string, carne:number,numcat:number){
       this.idPublicacion=id;
       this.Mensaje=msj;
       this.Usuario_Carnet=carne;
       this.Catedratico_NoCatedratico=numcat;
    }
    
}