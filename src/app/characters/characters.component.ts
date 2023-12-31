import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  @Input() form!: FormGroup;
  joins: string[] = ['movies', 'editors', 'powers'];
  campos = [
    {value: 'characters.id', nome: 'characters_id'},
    {value: 'characters.name', nome: 'characters_name'},
    {value: 'characters.birth', nome:'characters_birth'},
    {value: 'characters.count_of_issue_appearances', nome:'characters_count_of_issue_appearances'},
    {value: 'characters.description', nome: 'characters_description'},
    {value: 'characters.rel_name', nome: 'characters_rel_name'},
  ];

  camposMovies = [
    { value: 'movies.id', nome: 'movies_id' },
    { value: 'movies.name', nome: 'movies_name' },
    { value: 'movies.budget', nome: 'movies_budget' },
    { value: 'movies.description', nome: 'movies_description' },
    { value: 'movies.data_added', nome: 'movies_data_added' },
    { value: 'movies.rating', nome: 'movies_rating' },
    { value: 'movies.total_revenue', nome: 'movies_total_revenue' },
    { value: 'movies.runtime', nome: 'movies_runtime' },
    { value: 'movies.data_comic', nome: 'movies_data_comic' }
  ];

  camposSuperPowers = [
    { value: 'powers.id', nome: 'powers_id' },
    { value: 'powers.name', nome: 'powers_name' },
    { value: 'powers.date_added', nome: 'powers_date_added' },
    { value: 'powers.description', nome: 'powers_description' }
  ];

  camposEditors = [
    { value: 'editors.id', nome: 'editors_id' },
    { value: 'editors.name', nome: 'editors_name' },
    { value: 'editors.hometown', nome: 'editors_hometown' },
    { value: 'editors.country', nome: 'editors_country' },
    { value: 'editors.data_added', nome: 'editors_data_added' },
    { value: 'editors.birth', nome: 'editors_birth' },
    { value: 'editors.gender', nome: 'editors_gender' }
  ];



  filterSelected: any[] = [];
  filters = [
    {value: 1, name: 'Top 10 personagens que mais aparecem em filmes'},
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.addControl('joins', this.buildJoins());
    console.log(this.form.controls['joins'].value[0])
  }

  get campoFilho(): FormControl {
    return this.form.get('filters') as FormControl;
  }

  buildJoins(){
    const values = this.joins.map(v => new FormControl(false));
    return this.fb.array(values);
  }
  getJoinsControls() {
    return (this.form.get('joins') as FormArray).controls;
  }

  toggleMovies() {
    if (this.form.controls['joins'].value[0]) {
      // Adicionar os itens de camposMovies à lista campos
      this.campos.push(...this.camposMovies);
    } else {
      // Remover os itens de camposMovies da lista campos
      this.campos = this.campos.filter(item => !this.camposMovies.includes(item));
    }
  }

  toggleEditors() {
    if (this.form.controls['joins'].value[1]) {
      // Adicionar os itens de camposMovies à lista campos
      this.campos.push(...this.camposEditors);
    } else {
      // Remover os itens de camposMovies da lista campos
      this.campos = this.campos.filter(item => !this.camposEditors.includes(item));
    }
  }

  toggleSuperPower() {
    if (this.form.controls['joins'].value[2]) {
      // Adicionar os itens de camposMovies à lista campos
      this.campos.push(...this.camposSuperPowers);
    } else {
      // Remover os itens de camposMovies da lista campos
      this.campos = this.campos.filter(item => !this.camposSuperPowers.includes(item));
    }
  }

  verificaFiltro(){
    if(this.form.get('filters')?.value.includes(this.filters[0].value)){
      this.form.get('joins')?.patchValue([true, false, false])
    }else if(this.form.get('filters')?.value.includes(this.filters[1].value)){
      this.form.get('joins')?.patchValue([false, false, true]);
      console.log(this.form.get('joins')?.value[2]);
    }
    this.toggleMovies();
    this.toggleEditors();
    this.toggleSuperPower();
  }


  OnChange(){
    this.toggleMovies();
    this.toggleEditors();
    this.toggleSuperPower();
  }

}
