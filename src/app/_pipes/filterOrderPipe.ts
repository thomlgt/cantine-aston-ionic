import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOrderPipe'
})
export class FilterOrderPipe implements PipeTransform {

  transform(items: any[], searchToken: string) {


        if (searchToken == null)
            searchToken = "";

        searchToken = searchToken.toLowerCase();

        return items.filter(elem => elem.user.name.toLowerCase().indexOf(searchToken) > -1);
    }

}