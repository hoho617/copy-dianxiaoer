import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';

import * as moment from 'moment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.css']
})

export class CommentComponent implements OnInit{


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
    name   : '全部',
    index: 1
  },
  {
    name   : '好评',
    index: 2
  },
  {
    name   : '中评',
    index: 3
  },
  {
    name   : '差评',
    index: 4
  }
];
// 表格数据
  _dataSet = [];
  ngOnInit(){
    for (let i = 0; i < 4; i++) {
      this._dataSet.push({
        key    : i,
        wechatNumber   : 'sdkhfdis56',
        commentTime    : '2018-03-28 10:23:10',
        roomNumber: 888888,
        totalComment:'好评',
        rateList:[
          {
            item:'包装',
            star:2
          },
          {
            item:'周围环境',
            star:1
          },
          {
            item:'卫生',
            star:0
          },
          {
            item:'设施',
            star:5
          },
          {
            item:'服务',
            star:4
          },
        ],
        txtComment:'环境不大好，卫生有点差，服务不好',
        commentCategory:'直接点评',
        clientType:'粉丝'
      });
    }
  }
/** tab切换结束*/
}
