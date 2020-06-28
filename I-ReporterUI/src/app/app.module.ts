import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlagComponent} from './components/flag/flag.component';
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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
