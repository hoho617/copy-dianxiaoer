import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';

import * as moment from 'moment';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.css']
})

export class ClientComponent implements OnInit{



// 表格数据
  data = [];
  ngOnInit(){
    for (let i = 0; i < 4; i++) {
      this.data.push({
        key    : i,
        name   : '杨明明',
        phoneNumber    : '13826548596',
        wechatNumber: 'sdhfjfer',
        cardCode:'201803022546',
        tag:'高价值',
        integral:'568',
        balance:'￥1023.00',
        createTime:'2018-03-28 10:23'
      });
    }
  }
}
