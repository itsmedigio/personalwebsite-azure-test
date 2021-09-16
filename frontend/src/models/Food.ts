import { MissingTranslationStrategy } from "@angular/core";

export class Food {
    id : number;
    name : string;
    type : string;

    constructor (id: number, name: string, type: string){
        this.id = id
        this.name = name
        this.type = type
    }
}