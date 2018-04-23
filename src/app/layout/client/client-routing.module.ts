import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientComponent} from "./client.component";
import {ClientTagComponent} from "./tag/tag.component";



const routes: Routes = [
  {path: '', component: ClientComponent},
  {path:'tag',component:ClientTagComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class ClientRoutingModule {

}
