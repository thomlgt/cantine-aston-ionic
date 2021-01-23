import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUserPipe'
})
export class FilterUserPipe implements PipeTransform {

  transform(items: any[], searchToken: string) {


        if (searchToken == null)
            searchToken = "";

        searchToken = searchToken.toLowerCase();

        return items.filter(elem => elem.name.toLowerCase().indexOf(searchToken) > -1);
    }

}