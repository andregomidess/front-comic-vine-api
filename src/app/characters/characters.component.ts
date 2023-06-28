import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  @Input() form!: FormGroup;

  filterSelected: any[] = [];
  filters = [
      { id: 1, name: 'Top 10 personagens que mais aparecem em filmes'},
      { id: 2, name: 'Top 10 personagens que mais aparecem em revistas'},
      { id: 3, name: 'Super poderes mais recorrentes'},
  ];

}
