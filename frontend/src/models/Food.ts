import { MissingTranslationStrategy } from "@angular/core";

export class Food {
    id?: number;
    name : string;
    type : string;
    calories : number;

    constructor (name: string, type: string, calories: number){
        this.name = name
        this.type = type
        this.calories = calories
    }
}
