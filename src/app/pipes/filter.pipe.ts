import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allProjects:any[],searchTerm:string,propsName:string): any[] {
    const result:any[]=[];
    if(!allProjects||searchTerm==''||propsName==''){
      return allProjects;
    }
    allProjects.forEach((project:any)=>{
      if(project[propsName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase()))
      result.push(project)
    })
    return result;
  }

}
