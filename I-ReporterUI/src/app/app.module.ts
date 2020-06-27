import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { GoogleMapsModule } from '@angular/google-maps'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddInterventionRecordComponent } from './components/add-intervention-record/add-intervention-record.component';
import { AgmCoreModule} from '@agm/core';
import { InterventionRecordListComponent } from './components/intervention-record-list/intervention-record-list.component';
import { InterventionRecordDetailsComponent } from './components/intervention-record-details/intervention-record-details.component';
import{CommonModule }from '@angular/common';
import{BrowserAnimationsModule }from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr'
import {  ReactiveFormsModule } from '@angular/forms';




import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    AddInterventionRecordComponent,
    InterventionRecordListComponent,
    InterventionRecordDetailsComponent,
    AppComponent,
    LoginComponent,
    NavbarComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleMapsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAU4NQxFttNiM906LqaPSb3xrjOyzhvE9E'
    }),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
