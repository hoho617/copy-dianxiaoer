import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingComponent} from './setting.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {SettingRoutingModule} from "./setting-routing.module";
import { HttpClientModule } from '@angular/common/http';
//新增的
import  { FormsModule } from '@angular/forms';
import {SettingVipComponent} from './setting-vip/setting-vip.component';
import {SettingInfoComponent} from "./setting-info/setting-info.component";
import {SettingPayComponent} from "./setting-pay/setting-pay.component";
import {SettingRoomComponent} from "./setting-room/setting-room.component";
import {SettingUserComponent} from "./setting-user/setting-user.component";
import {UserAddComponent} from "./setting-user/add-user/add-user.component";
import {RoomAddComponent} from "./setting-room/add-room/add-room.component";


// 测试三级联动


@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule,
    SettingRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    SettingComponent,
    SettingVipComponent,
    SettingInfoComponent,
    SettingPayComponent,
    SettingRoomComponent,
    SettingUserComponent,
    UserAddComponent,
    RoomAddComponent
  ]
})
export class SettingModule {
}
