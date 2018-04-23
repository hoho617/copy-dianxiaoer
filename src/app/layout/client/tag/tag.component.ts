import { Component,OnInit } from '@angular/core';

@Component({
    selector:'app-client-tag',
    templateUrl:'tag.component.html',
    styleUrls:['tag.css']
})

export class ClientTagComponent {




// 表格数据
  ngOnInit(){
    this.data.forEach(item => {
      this.tempEditObject[ item.key ] = {};
    })
  }
  editRow = null;
  tempEditObject = {};
  data = [
    {
      key    : 0,
      title   : '高价值客户',
      fanNum    : '123',
      memberNum: '113',
      condition:'累计成功交易 12 笔 或 累计购买金额 2.00 元 或 累计积分达到 1'
    },{
      key    : 1,
      title   : '低价值客户',
      fanNum    : '123',
      memberNum: '113',
      condition:'累计成功交易 12 笔 或 累计购买金额 2.00 元 或 累计积分达到 1'
    },{
      key    : 2,
      title   : '高价值客户',
      fanNum    : '123',
      memberNum: '113',
      condition:'累计成功交易 12 笔 或 累计购买金额 2.00 元 或 累计积分达到 1'
    }

  ];

  edit(data) {
    this.tempEditObject[ data.key ] = { ...data };
    this.editRow = data.key;
  }

  save(data) {
    // Object.assign(data, this.tempEditObject[ data.key ]);
    this.editRow = null;
  }

  cancel(data) {
    this.tempEditObject[ data.key ] = {};
    this.editRow = null;
  }

}
