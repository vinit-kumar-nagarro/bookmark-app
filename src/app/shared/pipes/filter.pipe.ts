import { Pipe, PipeTransform } from '@angular/core';
import { Bookmark } from '../models';

@Pipe({
  name: 'filterByName'
})
export class FilterPipe implements PipeTransform {

  transform(values: Bookmark[], searchText: string): any {
    if (!searchText) {
      return values;
    }

    return values.filter(it => it.name.includes(searchText));
  }

}
