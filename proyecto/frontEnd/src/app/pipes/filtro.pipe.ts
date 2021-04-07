import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPost=[]
      for(const catedratico of value){
        if(catedratico.Nombres.indexOf(arg)>-1 || catedratico.Apellidos.indexOf(arg)>-1 ){
          resultPost.push(catedratico)
        }
      }

      return resultPost;
    
  }

}
