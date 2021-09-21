import { Component, OnInit } from '@angular/core';
import { Food } from 'src/models/Food';
import { ApiService } from '../../services/ApiService.service'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-rimuovicibo',
  templateUrl: './rimuovicibo.component.html',
  styleUrls: ['./rimuovicibo.component.scss']
})
export class RimuoviciboComponent implements OnInit {

  public listfoods : Food[];

  constructor(private _ApiService: ApiService) {
    this.listfoods = [];
   }

  ngOnInit(): void {
    this._ApiService.getFoods().subscribe(data=>{
      this.listfoods = data.value;
      console.log(data.value);
    })
  }

  deleteCibo(form: NgForm) {
    console.log(form)
    let id = form.value.idcibo;
    this._ApiService.deleteFood(id).subscribe( data=> {
      console.log(data);
      window.location.href = '/dashboard';
    })
  }
}
