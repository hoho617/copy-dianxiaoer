import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';

import * as moment from 'moment';

@Component({
  selector: 'app-setting-user',
  templateUrl: './setting-user.component.html',
  styleUrls: ['./setting-user.css']
})

export class SettingUserComponent implements OnInit{

  // 表格数据
  ngOnInit(){

  }
  data = [
    {
      key    : 0,
      name   : '张某某',
      phoneNumber    : '13822222222',
      wechatNumber: 'sdjkfaljf',
      group:'管家组',
      adder:'李某某',
      addTime:'2018-03-08 10:23'
    },{
      key    : 1,
      name   : '张某某',
      phoneNumber    : '13822222222',
      wechatNumber: 'sdjkfaljf',
      group:'管家组',
      adder:'李某某',
      addTime:'2018-03-08 10:23'
    },{
      key    : 2,
      name   : '张某某',
      phoneNumber    : '13822222222',
      wechatNumber: 'sdjkfaljf',
      group:'管家组',
      adder:'李某某',
      addTime:'2018-03-08 10:23'
    }

  ];

}
