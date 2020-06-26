import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { CurrentprofileComponent} from './components/currentprofile/currentprofile.component';


const routes: Routes = [
  {path: "profile/:id", component: CurrentprofileComponent},
  {path: "create/profile", component:ProfileComponent}, 
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:"/", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
