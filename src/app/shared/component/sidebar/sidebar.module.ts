import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {SidebarComponent} from './sidebar.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    SidebarComponent
  ],
  providers: [],
  exports: [SidebarComponent]
})
export class SidebarModule {
}
