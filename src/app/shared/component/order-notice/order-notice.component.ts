import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-order-notice',
  templateUrl: './order-notice.component.html',
  styleUrls: ['./order-notice.component.css']
})
export class OrderNoticeComponent implements OnInit {


  @Input()
  isVisible:boolean;
  @Input()
  noticeNumber:number;
  @Output()
  isVisibleChange:EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  handleOk = (e) => {
    console.log('点击了确定');
    this.isVisible = false;
  }

  handleCancel = (e) => {
    console.log(e);
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
  }

}
