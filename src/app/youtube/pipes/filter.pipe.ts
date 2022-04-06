import { Pipe, PipeTransform } from '@angular/core';
import { IFilter } from '../../core/models/filter.model';
import { ISearchItem } from '../../shared/models/search-item.model';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(items: ISearchItem[], filter: IFilter): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    if (filter.title) { return items.filter((item) => item.snippet.title.indexOf(filter.title) !== -1); }
    return items;
  }
}
