import { Component, OnInit } from '@angular/core';
import { Food } from '../../models/Food';
import { ApiService } from '../../services/ApiService.service'

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.scss']
})
export class SplashscreenComponent {

  public listfoods : Food[];

  constructor(private _ApiService: ApiService){
    this.listfoods = [];
  }

  ngOnInit(): void {
    this._ApiService.getFoods().subscribe(data=>{
      this.listfoods = data.value;
      console.log(data.value);
    })
  }

}
