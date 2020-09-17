import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform{
    transform(items: any, filter: any, defaultFilter: boolean): any {
        if (!filter){
          return items;
        }
    
        if (!Array.isArray(items)){
          
          return items;
        }
    
        if (filter && Array.isArray(items)) {
          let filterKeys = Object.keys(filter);
    
          if (defaultFilter) {
            return items.filter(item =>
                filterKeys.reduce((x, keyName) =>
                    (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "", true));
          }
          else {
            return items.filter(item => {
              return filterKeys.some((keyName) => {
                return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
              });
            });
          }
        }
      }
 


    // transform(items: any[], value: string, label:string): any[] {
    //     if (!items) return [];
    //     if (!value) return  items;
    //     if (value == '' || value == null) return [];
    //     return items.filter(e => e[label].toLowerCase().indexOf(value) > -1 );
        
    //   }
}