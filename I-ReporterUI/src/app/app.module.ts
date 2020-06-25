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
@NgModule({
  declarations: [
    AppComponent,
    AddInterventionRecordComponent,
    InterventionRecordListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAU4NQxFttNiM906LqaPSb3xrjOyzhvE9E'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
