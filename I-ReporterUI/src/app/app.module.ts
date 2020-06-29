import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
=======


import { GoogleMapsModule } from '@angular/google-maps'


import { ProfileComponent } from './components/profile/profile.component';
import { CurrentprofileComponent } from './components/currentprofile/currentprofile.component';
>>>>>>> 40595af62eff6e25f33adc62c43b1a5fb3a58b89
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddInterventionRecordComponent } from './components/add-intervention-record/add-intervention-record.component';
import { AgmCoreModule } from '@agm/core';
import { InterventionRecordListComponent } from './components/intervention-record-list/intervention-record-list.component';
import { InterventionRecordDetailsComponent } from './components/intervention-record-details/intervention-record-details.component';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
=======
import{CommonModule }from '@angular/common';
import{BrowserAnimationsModule }from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr'


>>>>>>> 40595af62eff6e25f33adc62c43b1a5fb3a58b89



import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { AuthComponent } from './auth/auth.component';
import { SignupService } from './signup.service';
import { ProfileComponent } from './components/profile/profile.component';
import { CurrentprofileComponent } from './components/currentprofile/currentprofile.component';
import { NotFoundComponent } from './not-found/not-found.component';


=======
import { SearchListComponent } from './components/search-list/search-list.component';
>>>>>>> 40595af62eff6e25f33adc62c43b1a5fb3a58b89
@NgModule({
  declarations: [
    AppComponent,
    AddInterventionRecordComponent,
    InterventionRecordListComponent,
    InterventionRecordDetailsComponent,
<<<<<<< HEAD
=======
    AppComponent,
    AppComponent,
>>>>>>> 40595af62eff6e25f33adc62c43b1a5fb3a58b89
    ProfileComponent,
    CurrentprofileComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
<<<<<<< HEAD
    AuthComponent,
    NotFoundComponent
=======
    SearchListComponent
>>>>>>> 40595af62eff6e25f33adc62c43b1a5fb3a58b89
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
<<<<<<< HEAD
    CommonModule,
    BrowserAnimationsModule,
=======
    GoogleMapsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      // apiKey:''
    }),
>>>>>>> 40595af62eff6e25f33adc62c43b1a5fb3a58b89
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
      // apiKey:'AIzaSyAU4NQxFttNiM906LqaPSb3xrjOyzhvE9E'
    }),
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
