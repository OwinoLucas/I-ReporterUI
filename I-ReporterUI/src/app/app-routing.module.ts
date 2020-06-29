import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FlagComponent} from './components/flag/flag.component';
import { FlagslistComponent } from './components/flagslist/flagslist.component'
import { FlagdetailComponent }from './components/flagdetail/flagdetail.component'
const routes: Routes = [
  {path:'add/new-flag',component:FlagComponent},
  {path:'flags/all',component:FlagslistComponent},
  {path:'flag/:id',component:FlagdetailComponent},
  {path: '', redirectTo:"/", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
