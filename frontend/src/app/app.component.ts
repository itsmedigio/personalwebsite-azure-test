import { Component, Output } from '@angular/core';
import { Food } from 'src/models/Food';
import { ApiService } from '../services/ApiService.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _ApiService: ApiService){
  }
}
