import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddInterventionRecordComponent} from './components/add-intervention-record/add-intervention-record.component';
import {InterventionRecordListComponent } from './components/intervention-record-list/intervention-record-list.component'

const routes: Routes = [
  {path:'add/new-intervention-record',component:AddInterventionRecordComponent},
  {path:'intervention-records/all',component:InterventionRecordListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
