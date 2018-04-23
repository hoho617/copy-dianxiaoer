import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {FormsModule} from '@angular/forms';
import {HeaderModule} from '../shared/component/header/header.module';
import {SidebarModule} from '../shared/component/sidebar/sidebar.module';
import {InformModule} from "../shared/component/inform/inform.module";


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HeaderModule,
    SidebarModule,
    InformModule
  ],
  declarations: [
    LayoutComponent,
  ],
  providers: [
  ]

})
export class LayoutModule {
}
