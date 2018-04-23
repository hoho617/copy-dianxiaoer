import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';

import * as moment from 'moment';

@Component({
  selector: 'app-setting-vip',
  templateUrl: './setting-vip.component.html',
  styleUrls: ['./setting-vip.css']
})

export class SettingVipComponent implements OnInit{


/** tab切换开始*/
tabs = [
  {
    name   : '全网最低',
    index: 1
  },
  {
    name   : '入住特权',
    index: 2
  },
  {
    name   : '积分与储值',
    index: 3
  },
  {
    name   : '会员福利',
    index: 4
  },
  {
    name   : '升级攻略',
    index: 5
  },{
    name   : '你问我答',
    index: 6
  },
  {
    name   : '会员公告',
    index: 7
  },

];

  ngOnInit(){

    }
}
