import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.css']
})

export class OrderDetailComponent {
  isDone:boolean=true;
  feel:string;
  star:number=0;
  inputValue;
  feeling(e){
    this.feel=e;
  }
}
