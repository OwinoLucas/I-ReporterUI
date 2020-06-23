import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { CurrentprofileComponent} from './components/currentprofile/currentprofile.component';


const routes: Routes = [
  {path: "profile", component: CurrentprofileComponent},
  {path: "create/profile", component:ProfileComponent},
  {path: "", component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
