import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AdHocModule } from './ad-hoc/ad-hoc.module';


@NgModule({
  declarations: [
    AppComponent,
    //AdHocComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    AdHocModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
