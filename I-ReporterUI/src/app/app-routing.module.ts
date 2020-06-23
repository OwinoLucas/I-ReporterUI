import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddInterventionRecordComponent} from './components/add-intervention-record/add-intervention-record.component';


const routes: Routes = [
  {path:'add/new-intervention-record',component:AddInterventionRecordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
