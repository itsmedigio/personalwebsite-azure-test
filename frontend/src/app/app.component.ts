import { Component } from '@angular/core';
import { Food } from 'src/models/Food';
import { ApiService } from '../services/ApiService.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listfoods:Food[];
  constructor(private _ApiService: ApiService){
    this.listfoods=[];
  }

  fetchAll(){
  this._ApiService.getFoods().subscribe(data=>{
    this.listfoods = data.value;
    console.log(data.value);
  })
  }
}
