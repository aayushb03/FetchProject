import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DogcardComponent } from './dogcard/dogcard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DogcardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
