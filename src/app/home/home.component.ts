import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Huu Tan'

  public age = 18

  public listFruit = ['cam','xoai','man','nho']

  public listFruitObject=[
    {name:'cam', price:5000, quantity:5, isCheck:true},
    {name:'buoi', price:-1566.2, quantity:15, isCheck:false},
    {name:'xoai', price:5000.435, quantity:3, isCheck:true}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public resetName():void {
    //console.log('this name')
    this.name='';
  }

}
