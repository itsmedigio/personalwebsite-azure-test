import { Component } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { Food } from 'src/models/Food';
import { ApiService } from '../../services/ApiService.service'

@Component({
  selector: 'app-editorcibo',
  templateUrl: './editorcibo.component.html',
  styleUrls: ['./editorcibo.component.scss']
})

export class EditorciboComponent {


  constructor(private _ApiService: ApiService) { }

  addCibo(form: NgForm) {
    console.log(form.value.calor);
    console.log(form.value.nomecibo);
    console.log(form.value.tipocibo);
    let calor = form.value.calor;
    let nomecibo = form.value.nomecibo;
    let tipocibo = form.value.tipocibo;
    let food: Food = new Food(nomecibo, tipocibo, calor);
    this._ApiService.addFood(food).subscribe( data=> {
      console.log(data);
      window.location.href = '/dashboard';
    })
  }

}
