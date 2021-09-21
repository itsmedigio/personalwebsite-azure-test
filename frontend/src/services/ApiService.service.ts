import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Food } from 'src/models/Food';

@Injectable()
export class ApiService{

    constructor(private httpClient: HttpClient){

    }

    getFoods() : Observable<any> {
        return this.httpClient.get("https://localhost:44378/api/v1/Foods");
    }

    addFood(food: Food) : Observable<Food> {
      return this.httpClient.post<Food>("https://localhost:44378/api/v1/Foods", food)
    }

    deleteFood(id: number) : Observable<number> {
      return this.httpClient.delete<number>("https://localhost:44378/api/v1/Foods/"+id)
    }
}
