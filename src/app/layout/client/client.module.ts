import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientComponent} from './client.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {ClientRoutingModule} from "./client-routing.module";
//新增的
import  { FormsModule } from '@angular/forms';
import {ClientTagComponent} from "./tag/tag.component";

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule,
    ClientRoutingModule,
    FormsModule
  ],
  declarations: [ClientComponent,ClientTagComponent]
})
export class ClientModule {
}
