import { Component, OnInit } from '@angular/core';
import { Good } from 'src/app/interfaces/good.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  goods: Good [] = [
    {name:'apple',price:5,photoUrl:'assets/f5.jpeg'},
    {name:'banana',price:10,photoUrl:'assets/f2.jpeg'},
    {name:'orange',price:6,photoUrl:'assets/f3.jpeg'},
    {name:'avocado',price:13,photoUrl:'assets/f1.jpeg'}
  ]

  constructor() { }

  ngOnInit() {
  }

  addToCart(index){
    console.log('added',this.goods[index])
  }

}
