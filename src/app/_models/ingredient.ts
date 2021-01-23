import { Resource } from './resource';

export class Ingredient implements Resource<number> {

    constructor(
        public id : number,
        public description : string,
        public label : string,
        public status : number,
        public imageId : number,
    ) {}


}