import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Output() onVoted = new EventEmitter<any>();
  constructor(public router:Router)
  {

  }
  changeRoutes(e){
    console.log("head",e)
    this.onVoted.emit(e);
  }
}
