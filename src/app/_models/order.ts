import { Quantity } from './quantity';
import { Resource } from './resource';
import { User } from './user';

export class Order implements Resource<number> {

    constructor(
        public id : number,
        public creationDate : string,
        public creationTime : string,
        public status : number,
        public user : User,
        public quantity : Quantity[],
        public priceVAT : number
    ) {}
}