import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


=======
import { ProfileComponent } from './components/profile/profile.component';
import { CurrentprofileComponent } from './components/currentprofile/currentprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps'
>>>>>>> 989ca6fc7365d3253f145ff552f04ea278c04e40
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddInterventionRecordComponent } from './components/add-intervention-record/add-intervention-record.component';
import { AgmCoreModule } from '@agm/core';
import { InterventionRecordListComponent } from './components/intervention-record-list/intervention-record-list.component';
import { InterventionRecordDetailsComponent } from './components/intervention-record-details/intervention-record-details.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
=======
import { SearchListComponent } from './components/search-list/search-list.component';
>>>>>>> 989ca6fc7365d3253f145ff552f04ea278c04e40
import { AuthComponent } from './auth/auth.component';
import { SignupService } from './signup.service';
import { NotFoundComponent } from './not-found/not-found.component';


<<<<<<< HEAD
import { SearchListComponent } from './components/search-list/search-list.component';
=======
>>>>>>> 989ca6fc7365d3253f145ff552f04ea278c04e40
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
>>>>>>> 989ca6fc7365d3253f145ff552f04ea278c04e40
    ProfileComponent,
    CurrentprofileComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
<<<<<<< HEAD
    AuthComponent,
    NotFoundComponent,
    SearchListComponent
=======
    SearchListComponent,
    AuthComponent,
    NotFoundComponent
>>>>>>> 989ca6fc7365d3253f145ff552f04ea278c04e40
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
<<<<<<< HEAD
=======
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      // apiKey:''
    }),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
>>>>>>> 989ca6fc7365d3253f145ff552f04ea278c04e40
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    AgmCoreModule.forRoot({
<<<<<<< HEAD
      apiKey: 'AIzaSyAU4NQxFttNiM906LqaPSb3xrjOyzhvE9E'
=======
      apiKey:'AIzaSyAU4NQxFttNiM906LqaPSb3xrjOyzhvE9E'
>>>>>>> 989ca6fc7365d3253f145ff552f04ea278c04e40
    }),
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
