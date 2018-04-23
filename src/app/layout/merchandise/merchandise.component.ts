import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';

import * as moment from 'moment';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.css']
})

export class MerchandiseComponent implements OnInit{


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
    name   : '出售中',
    index: 1
  },
  {
    name   : '已售完',
    index: 2
  },
  {
    name   : '已下架',
    index: 3
  }
];
// 表格数据
  _dataSet = [];
  ngOnInit(){
    for (let i = 0; i < 4; i++) {
      this._dataSet.push({
        key    : i,
        goodsName   : '香烟',
        goodsType    : '食物',
        goodsPrice: '￥25.00',
        goodsStock:'45',
        goodsSales:'667',
        goodsIntegral:'568',
        startSaleTime:'2018-03-28 10:23:10',
        endSaleTime:'2018-03-28 10:23:10',
        goodsStatus:'上架'
      });
    }
  }

  // 多选框

  _allChecked = false;
  _indeterminate = false;
  _displayData = [];
  _displayDataChange($event) {
    this._displayData = $event;
    this._refreshStatus();
  }

  _refreshStatus() {
    const allChecked = this._displayData.every(value => value.checked === true);
    const allUnChecked = this._displayData.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
  }

  _checkAll(value) {
    if (value) {
      this._displayData.forEach(data => {
        data.checked = true;
      });
    } else {
      this._displayData.forEach(data => {
        data.checked = false;
      });
    }
    this._refreshStatus();
  }
/** tab切换结束*/
}
