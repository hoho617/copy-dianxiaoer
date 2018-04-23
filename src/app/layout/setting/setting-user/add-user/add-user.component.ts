import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';

import * as moment from 'moment';

@Component({
  selector: 'app-setting-user',
  templateUrl: 'add-user.component.html',
  styleUrls: ['add-user.css']
})

export class UserAddComponent implements OnInit{

  // 表格数据
  ngOnInit(){

  }
  /** 多选框*/
  checkOptions = [
    {
      value:'登录',
      label:'扫码后可直接登录小程序管理后台，无需管理员确认',
      checked:true
    },
    {
      value:'服务房态',
      label:'登录后可查看服务工作台',
    },
    {
      value:'订单'
    },
    {
      value:'商品'
    },
    {
      value:'客户'
    },
    {
      value:'点评'
    },
    {
      value:'设置'
    }
  ]

}
