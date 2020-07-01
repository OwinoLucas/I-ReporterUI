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
import { FlagComponent } from './components/flag/flag.component';
import { FlagslistComponent } from './components/flagslist/flagslist.component';
import { FlagdetailComponent } from './components/flagdetail/flagdetail.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create/profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'search-list/:title', component: SearchListComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'profile/:user', component: CurrentprofileComponent, canActivate: [AuthGuard] },
  { path: 'add/new-intervention-record', component: AddInterventionRecordComponent, canActivate: [AuthGuard] },
  { path: 'intervention-record/all', component: InterventionRecordListComponent },
  { path: 'intervention-record/:id', component: InterventionRecordDetailsComponent },
  { path: 'search-list/:title', component: SearchListComponent },
  { path: 'add/new-flag', component: FlagComponent, canActivate: [AuthGuard] },
  { path: 'flags/all', component: FlagslistComponent },
  { path: 'flag/:id', component: FlagdetailComponent },
  { path: '**', component: NotFoundComponent },

  { path: '', redirectTo: "/", pathMatch: "full" },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
