import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-inform',
  templateUrl: './inform.component.html',
  styleUrls: ['./inform.component.css']
})

export class InformComponent{
  isVisible = false;
  noticeNumber = 25;
  showModal = ()=>{
    this.isVisible = true;
  }

}
