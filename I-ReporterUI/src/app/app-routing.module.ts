import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { FlagComponent} from './components/flag/flag.component';
import { FlagslistComponent } from './components/flagslist/flagslist.component';
import { FlagdetailComponent }from './components/flagdetail/flagdetail.component';

const routes: Routes = [
  { path: "profile/:id", component: CurrentprofileComponent },
  { path: "create/profile", component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: "/", pathMatch: "full" },
  { path: 'search-list/:title', component: SearchListComponent },
  { path: 'signup', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create/profile', component: ProfileComponent },
  { path: 'profile/:user', component: CurrentprofileComponent },
  { path: 'add/new-intervention-record', component: AddInterventionRecordComponent },
  { path: 'intervention-record/all', component: InterventionRecordListComponent },
  { path: 'intervention-record/:id', component: InterventionRecordDetailsComponent },
  { path: 'search-list/:title', component: SearchListComponent },
  { path: '**', component: NotFoundComponent },
  { path:'add/new-flag',component:FlagComponent},
  { path:'flags/all',component:FlagslistComponent},
  { path:'flag/:id',component:FlagdetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
