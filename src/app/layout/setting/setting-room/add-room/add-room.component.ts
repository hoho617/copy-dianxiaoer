import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';

import * as moment from 'moment';

@Component({
  selector: 'app-setting-room',
  templateUrl: 'add-room.component.html',
  styleUrls: ['add-room.css']
})

  export class RoomAddComponent implements OnInit{
  /** tab切换开始*/
  tabs = [
    {
      name   : '房间设置',
      index: 1
    },
    {
      name   : '房型设置',
      index: 2
    }
  ];
// 表格数据

  /** tab切换结束*/

  dataOne = [
    {
      key    : 0,
      roomNumber   : '1201',
      roomType    : '大床房',
      roomCodeSrc: '../../../../assets/images/code.jpg',
      adder:'李某某',
      addTime:'2018-03-08 10:23'
    },{
      key    : 1,
      roomNumber   : '1202',
      roomType    : '商务标间',
      roomCodeSrc: '../../../../assets/images/code.jpg',
      adder:'李某某',
      addTime:'2018-03-08 10:23'
    },{
      key    : 2,
      roomNumber   : '1202',
      roomType    : '豪华大床房',
      roomCodeSrc: '../../../../assets/images/code.jpg',
      adder:'李某某',
      addTime:'2018-03-08 10:23'
    }

  ];

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
      roomName   : '大床房',
      roomNum    : '20',
      adder: '李某某',
      addTime:'2018-03-08 10:22'
    },{
      key    : 1,
      roomName   : '豪华大床房',
      roomNum    : '123',
      adder: '李某某',
      addTime:'2018-03-08 10:22'
    },{
      key    : 2,
      roomName   : '商务标间',
      roomNum    : '22',
      adder: '李某某',
      addTime:'2018-03-08 10:22'
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
