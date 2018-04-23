import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';

import * as moment from 'moment';

@Component({
  selector: 'app-setting-pay',
  templateUrl: './setting-pay.component.html',
  styleUrls: ['./setting-pay.css']
})

export class SettingPayComponent implements OnInit{

  /** 日期选择器开始*/
  _startDate = null;
  _endDate = null;
  newArray = (len) => {
    const result = [];
    for (let i = 0; i < len; i++) {
      result.push(i);
    }
    return result;
  };
  _startValueChange = () => {
    if (this._startDate > this._endDate) {
      this._endDate = null;
    }
  };
  _endValueChange = () => {
    if (this._startDate > this._endDate) {
      this._startDate = null;
    }
  };
  _disabledStartDate = (startValue) => {
    if (!startValue || !this._endDate) {
      return false;
    }
    return startValue.getTime() >= this._endDate.getTime();
  };
  _disabledEndDate = (endValue) => {
    if (!endValue || !this._startDate) {
      return false;
    }
    return endValue.getTime() <= this._startDate.getTime();
  };
  get _isSameDay() {
    return this._startDate && this._endDate && moment(this._startDate).isSame(this._endDate, 'day')
  }
  get _endTime() {
    return {
      nzHideDisabledOptions: true,
      nzDisabledHours: () => {
        return this._isSameDay ? this.newArray(this._startDate.getHours()) : [];
      },
      nzDisabledMinutes: (h) => {
        if (this._isSameDay && h === this._startDate.getHours()) {
          return this.newArray(this._startDate.getMinutes());
        }
        return [];
      },
      nzDisabledSeconds: (h, m) => {
        if (this._isSameDay && h === this._startDate.getHours() && m === this._startDate.getMinutes()) {
          return this.newArray(this._startDate.getSeconds());
        }
        return [];
      }
    }
  }
  /** 日期选择器结束*/

/** tab切换开始*/
tabs = [
  {
    name   : '待服务',
    index: 1
  },
  {
    name   : '服务中',
    index: 2
  },
  {
    name   : '已完成',
    index: 3
  },
  {
    name   : '催单',
    index: 4
  },
  {
    name   : '全部',
    index: 5
  },
];
// 表格数据
  _dataSet = [];
  ngOnInit(){
    for (let i = 0; i < 4; i++) {
      this._dataSet.push({
        key    : i,
        roomNumber   : 1203,
        orderNumber    : 201845671203,
        name: '张某某',
        phone:'13654826597',
        serviceDetail:'打火机1 100 香烟1 100',
        ticketInfo:'长沙金天鹅软件科技有限公司',
        orderTime:'2018-03-28 10:23:10',
        orderType:'催单',
        orderStatus:'上架',
        operator:[
            '详情','发货','取消'
        ]
      });
    }
  }
/** tab切换结束*/
}
