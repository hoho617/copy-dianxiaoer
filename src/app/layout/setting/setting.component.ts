import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';

import * as moment from 'moment';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.css']
})

export class SettingComponent implements OnInit{


  /** tab切换开始*/
  tabs = [
    {
      name   : '店铺设置',
      index: 1
    },
    {
      name   : '店铺装修',
      index: 2
    }
  ];
// 表格数据


  ngOnInit(){

  }
  /** tab切换结束*/


//    上传图片开始
  fileList = [{
    uid: -1,
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  }];
  previewImage = '';
  previewVisible = false;

  constructor() {}

  handlePreview = (file) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };
//    上传图片结束


/** 多选框*/
checkOptions = [
  {
    label:'旅游推荐',
    value:'旅游推荐',
    checked:true
  },
  {
    label:'土特产',
    value:'土特产'
  },
  {
    label:'便利店',
    value:'便利店'
  },
  {
    label:'酒店活动',
    value:'酒店活动'
  },
]
}
