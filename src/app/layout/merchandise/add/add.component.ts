import { Component,OnInit } from '@angular/core';

@Component({
    selector:'app-merchandise-add',
    templateUrl:'./add.component.html',
    styleUrls:['./add.css']
})

export class MerchandiseAddComponent {



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
    // 单选框
    radioValue1 = 'a';
    radioValue2 = 'b1';
    radioValue3 = 'b2';
}
