import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(students : any, term : any): any {
    //check if search term is undefined
    if(term == undefined)
    {
      return students;
    }
    return students.filter(function(student){
    return student.name.toLowerCase().includes(term.toLowerCase());
    })
  

  }
}

