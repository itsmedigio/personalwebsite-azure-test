import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
 
@Injectable()
export class ApiService{

    constructor(private httpClient: HttpClient){

    }

    getFoods() : Observable<any> {
        return this.httpClient.get("https://localhost:5001/api/v1/Foods");
    }
}