import { Meal } from './meal';
import { Menu } from './menu';
import { Resource } from './resource';

export class Quantity implements Resource<number> {

    constructor(
        public id : number,
        public quantity : number,
        public meal : Meal,
        public menu : Menu
    ) {}
}