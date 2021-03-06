import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderComponent} from "./order.component";
import {OrderDetailComponent} from "./detail/detail.component";



const routes: Routes = [
  {path: '', component: OrderComponent},
  {path: 'detail', component:OrderDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class OrderRoutingModule {

}
