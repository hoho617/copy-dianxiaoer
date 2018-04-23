import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {MerchandiseModule} from "./merchandise/merchandise.module";
import {SettingModule} from "./setting/setting.module";


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'order', pathMatch: 'full'},
      {path: 'order', loadChildren: './order/order.module#OrderModule'},
      {path: 'comment', loadChildren: './comment/comment.module#CommentModule'},
      {path: 'merchandise', loadChildren: './merchandise/merchandise.module#MerchandiseModule'},
      {path: 'client', loadChildren: './client/client.module#ClientModule'},
      {path: 'setting', loadChildren: './setting/setting.module#SettingModule'}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
