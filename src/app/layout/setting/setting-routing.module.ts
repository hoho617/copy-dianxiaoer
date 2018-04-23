import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingComponent} from "./setting.component";
import {SettingVipComponent} from './setting-vip/setting-vip.component';
import {SettingInfoComponent} from "./setting-info/setting-info.component";
import {SettingPayComponent} from "./setting-pay/setting-pay.component";
import {SettingRoomComponent} from "./setting-room/setting-room.component";
import {SettingUserComponent} from "./setting-user/setting-user.component";
import {UserAddComponent} from "./setting-user/add-user/add-user.component";
import {RoomAddComponent} from "./setting-room/add-room/add-room.component";

const routes: Routes = [
  {path: '', component: SettingComponent},
  {path: 'setting-vip', component: SettingVipComponent},
  {path: 'setting-info', component: SettingInfoComponent},
  {path: 'setting-pay', component: SettingPayComponent},
  {path: 'setting-room', component: SettingRoomComponent},
  {path: 'setting-room-add', component: RoomAddComponent},
  {path: 'setting-user', component: SettingUserComponent},
  {path: 'setting-user-add', component: UserAddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class SettingRoutingModule {

}
