import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-volumes',
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.scss']
})
export class VolumesComponent {

  @Input() form!: FormGroup;

  filterSelected: any[] = [];
  filters = [
      { id: 1, name: 'Filtro 1'},
      { id: 2, name: 'Filtro 2'},
      { id: 3, name: 'Filtro 3'},
      { id: 4, name: 'Filtro 4'},
  ];

}
