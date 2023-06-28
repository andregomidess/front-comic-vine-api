import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdHocComponent } from './ad-hoc/ad-hoc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CharactersComponent } from './characters/characters.component';
import { MoviesComponent } from './movies/movies.component';
import { SuperPowerComponent } from './super-power/super-power.component';
import { VolumesComponent } from './volumes/volumes.component';
import { EditorsComponent } from './editors/editors.component';


@NgModule({
  declarations: [
    AppComponent,
    AdHocComponent,
    CharactersComponent,
    MoviesComponent,
    SuperPowerComponent,
    VolumesComponent,
    EditorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
