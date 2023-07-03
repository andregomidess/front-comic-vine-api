import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharactersComponent } from '../characters/characters.component';
import { EditorsComponent } from '../editors/editors.component';
import { MoviesComponent } from '../movies/movies.component';
import { SuperPowerComponent } from '../super-power/super-power.component';
import { VolumesComponent } from '../volumes/volumes.component';
import { AdHocComponent } from './ad-hoc.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { GraphComponent } from '../graph/graph.component';



@NgModule({
  declarations: [
    AdHocComponent,
    CharactersComponent,
    MoviesComponent,
    SuperPowerComponent,
    VolumesComponent,
    EditorsComponent,
    GraphComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
  ], exports: [
    AdHocComponent
  ]
})
export class AdHocModule { }
