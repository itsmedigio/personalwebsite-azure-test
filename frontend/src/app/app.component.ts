import { Component } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personalwebsite-angular';

  fetchAll(){
    axios.get('https://localhost:5001/api/v1/Foods/')
  .then(function (response) {
    console.log(response.data.value);
    return response.data.value;
  })
  .catch(function (error) {
    console.log(error);
  })
  }
}
