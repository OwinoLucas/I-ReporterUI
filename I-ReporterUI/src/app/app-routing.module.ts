import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddInterventionRecordComponent} from './components/add-intervention-record/add-intervention-record.component';
import {InterventionRecordListComponent } from './components/intervention-record-list/intervention-record-list.component'
import {InterventionRecordDetailsComponent }from './components/intervention-record-details/intervention-record-details.component'
const routes: Routes = [
  {path:'add/new-intervention-record',component:AddInterventionRecordComponent},
  {path:'intervention-record/all',component:InterventionRecordListComponent},
  {path:'intervention-record/:id',component:InterventionRecordDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
