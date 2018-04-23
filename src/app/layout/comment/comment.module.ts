import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentComponent} from './comment.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {CommentRoutingModule} from "./comment-routing.module";
//新增的
import  { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule,
    CommentRoutingModule,
    FormsModule
  ],
  declarations: [CommentComponent]
})
export class CommentModule {
}
