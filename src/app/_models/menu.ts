import { Meal } from './meal';
import { Resource } from './resource';

export class Menu implements Resource<number> {

    constructor(
        public description : string,
        public label : string,
        public status : number,
        public imageId : number,
        public priceDF : number,
        public availableForWeeks : number[],
        public meals ?: Meal[],
        public mealIds ?: number[],
        public id ?: number,
    ) {}

}