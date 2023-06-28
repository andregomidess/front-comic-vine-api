import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-super-power',
  templateUrl: './super-power.component.html',
  styleUrls: ['./super-power.component.scss']
})
export class SuperPowerComponent {

  @Input() form!: FormGroup;

  filterSelected: any[] = [];
  filters = [
      { id: 1, name: 'Filtro 1'},
      { id: 2, name: 'Filtro 2'},
      { id: 3, name: 'Filtro 3'},
      { id: 4, name: 'Filtro 4'},
  ];

}
