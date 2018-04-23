import { Component,OnInit } from '@angular/core';

@Component({
    selector:'app-merchandise-type',
    templateUrl:'merchandise-type.component.html',
    styleUrls:['merchandise-type.css']
})

export class MerchandiseTypeComponent {




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
      title   : '物品租借',
      isSystemType    : '是',
      disable: '否',
      adderName:'张晓梅',
      addTime:'2018-03-08 10:23'
    },{
      key    : 1,
      title   : '打扫服务',
      isSystemType    : '是',
      disable: '否',
      adderName:'张晓梅',
      addTime:'2018-03-08 10:23'
    },
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
