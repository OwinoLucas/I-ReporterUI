import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FlagComponent} from './components/flag/flag.component';
import {FlagslistComponent } from './components/flagslist/flagslist.component'
import {FlagdetailComponent }from './components/flagdetail/flagdetail.component'
const routes: Routes = [
  {path:'add/new-intervention-record',component:FlagComponent},
  {path:'intervention-record/all',component:FlagslistComponent},
  {path:'intervention-record/:id',component:FlagdetailComponent},
  {path: '', redirectTo:"/", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
