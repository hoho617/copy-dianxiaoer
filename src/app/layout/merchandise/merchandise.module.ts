import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MerchandiseComponent} from './merchandise.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {MerchandiseRoutingModule} from "./merchandise-routing.module";
import { MerchandiseAddComponent } from './add/add.component';
//为了图片上传引用的
import { HttpClientModule } from '@angular/common/http';
//新增的
import  { FormsModule } from '@angular/forms';
import {MerchandiseTypeComponent} from "./merchandise-type/merchandise-type.component";

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule,
    MerchandiseRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [MerchandiseComponent,MerchandiseAddComponent,MerchandiseTypeComponent]
})
export class MerchandiseModule {
}
