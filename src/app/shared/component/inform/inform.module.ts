import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InformComponent} from './inform.component';
import {FormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';

// 引入消息通知组件
import { OrderNoticeComponent } from '../../component/order-notice/order-notice.component';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    RouterModule
  ],
  declarations: [InformComponent,OrderNoticeComponent],
  exports: [InformComponent]
})
export class InformModule {
}
