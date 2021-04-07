import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCurso'
})
export class FiltroCursoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPost=[]
    for(const curso of value){
      if(curso.Nombre.indexOf(arg)>-1){
        resultPost.push(curso)
      }
    }
    return resultPost;
  }
}
