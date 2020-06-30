import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { CurrentprofileComponent } from './components/currentprofile/currentprofile.component';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { AddInterventionRecordComponent } from './components/add-intervention-record/add-intervention-record.component';
import { InterventionRecordListComponent } from './components/intervention-record-list/intervention-record-list.component';
import { InterventionRecordDetailsComponent } from './components/intervention-record-details/intervention-record-details.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { AuthComponent } from './auth/auth.component';
import { SignupService } from './signup.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { FlagComponent } from './components/flag/flag.component';
import { FlagslistComponent } from './components/flagslist/flagslist.component';
import { FlagdetailComponent } from './components/flagdetail/flagdetail.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component'


@NgModule({
  declarations: [
    AppComponent,
    FlagComponent,
    FlagslistComponent,
    FlagdetailComponent,
    ImageUploadComponent,
    AddInterventionRecordComponent,
    InterventionRecordListComponent,
    InterventionRecordDetailsComponent,
    ProfileComponent,
    CurrentprofileComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
    AuthComponent,
    NotFoundComponent,
    SearchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAU4NQxFttNiM906LqaPSb3xrjOyzhvE9E'

    }),
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
