import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderComponent} from './order.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {OrderRoutingModule} from "./order-routing.module";
import {OrderDetailComponent} from "./detail/detail.component";
//新增的
import  { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule,
    OrderRoutingModule,
    FormsModule
  ],
  declarations: [OrderComponent,OrderDetailComponent]
})
export class OrderModule {
}
