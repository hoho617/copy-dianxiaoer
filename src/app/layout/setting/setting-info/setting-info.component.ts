import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';

import * as moment from 'moment';

@Component({
  selector: 'app-setting-info',
  templateUrl: './setting-info.component.html',
  styleUrls: ['./setting-info.css']
})

export class SettingInfoComponent implements OnInit{


  ngOnInit(){

    }

  radioValue1 = 'on';
  radioValue2 = 'off';
  radioValue = this.radioValue1;
  /** 多选框*/
  checkOptions = [
    {
      value:'服务订单短信通知',
      checked:true
    },
    {
      value:'服务订单短信通知'
    },
    {
      value:'差评订单短信通知'
    },
    {
      value:'订单完成短信评价邀请'
    }
  ]
}
