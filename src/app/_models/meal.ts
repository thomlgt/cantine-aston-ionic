import { Ingredient } from './ingredient';
import { Resource } from './resource';

export class Meal implements Resource<number> {

    constructor(
        public description : string,
        public label : string,
        public status : number,
        public imageId : number,
        public priceDF : number,
        public availableForWeeks : number[],
        public ingredients ?: Ingredient[],
        public ingredientsId ?: number[],
        public id ?: number
    ) {}
    
}