import {Pipe, PipeTransform} from '@angular/core';
import {Item} from '../models/item';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(items: Array<Item>, author: string, au: number) {
    if (items && items.length) {
      return items.filter(item => {
        if (!au || au==0) {
          if (item.volumeInfo.authors) {
            if (author && !item.volumeInfo.authors.find(a => a.includes(author))) {
              return false;
            }
            return true;
          }
          if (!author) {
            return true;
          }
        }else{

          if (item.volumeInfo.authors) {
            if (author && !item.volumeInfo.authors.find(a => a.includes(author)) || item.volumeInfo.publishedDate !== au ) {
              return false;
            }
            return true;
          }
          if (!author) {
            if (item.volumeInfo.publishedDate !== au) {
              return false;
            }
            return true;
          }
        }

    });
    } else {
        return items;
    }

  }


}
