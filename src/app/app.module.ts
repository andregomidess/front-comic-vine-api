import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AdHocModule } from './ad-hoc/ad-hoc.module';
import { GraphComponent } from './graph/graph.component';
import { GraphService } from './graph/graph.service';


@NgModule({
  declarations: [
    AppComponent,
    //GraphComponent,
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
  providers: [GraphService],
  bootstrap: [AppComponent]
})
export class AppModule { }
