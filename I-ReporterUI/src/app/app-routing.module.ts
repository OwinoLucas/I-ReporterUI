import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
=======
import {SearchListComponent} from './components/search-list/search-list.component'
import {NavComponent} from '../app/nav/nav.component'
>>>>>>> 989ca6fc7365d3253f145ff552f04ea278c04e40
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CurrentprofileComponent } from './components/currentprofile/currentprofile.component';
import { AddInterventionRecordComponent } from './components/add-intervention-record/add-intervention-record.component';
import { InterventionRecordListComponent } from './components/intervention-record-list/intervention-record-list.component';
import { InterventionRecordDetailsComponent } from './components/intervention-record-details/intervention-record-details.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'add/new-intervention-record',component:AddInterventionRecordComponent},
  {path:'intervention-record/all',component:InterventionRecordListComponent},
  {path:'intervention-record/:id',component:InterventionRecordDetailsComponent},

  {path: "profile/:id", component: CurrentprofileComponent},
  {path: "create/profile", component:ProfileComponent}, 
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:"/", pathMatch:"full"},
  {path:'search-list/:title',component:SearchListComponent},
  { path: 'signup', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create/profile', component: ProfileComponent },
  { path: 'profile/:id', component: CurrentprofileComponent },
  { path: 'add/new-intervention-record', component: AddInterventionRecordComponent },
  { path: 'intervention-record/all', component: InterventionRecordListComponent },
  { path: 'intervention-record/:id', component: InterventionRecordDetailsComponent },
  { path: 'search-list/:title', component: SearchListComponent },
  { path: '**', component: NotFoundComponent },


  { path: '', redirectTo: "/", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
