import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MerchandiseComponent} from "./merchandise.component";
import { MerchandiseAddComponent } from './add/add.component';
import {MerchandiseTypeComponent} from "./merchandise-type/merchandise-type.component";



const routes: Routes = [
  {path: '', component: MerchandiseComponent},
  {
    path:'add',component:MerchandiseAddComponent
  },
  {
    path:'merchandise-type',component:MerchandiseTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class MerchandiseRoutingModule {

}
