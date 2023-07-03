import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  @Input() form!: FormGroup;
  joins: string[] = ['characters'];

  camposCharacters = [
    {value: 'characters.id', nome: 'characters_id'},
    {value: 'characters.name', nome: 'characters_name'},
    {value: 'characters.birth', nome:'characters_birth'},
    {value: 'characters.num_edicoes_aparece', nome:'characters_num_edicoes_aparece'},
    {value: 'characters.description', nome: 'characters_description'},
    {value: 'characters.rel_name', nome: 'characters_rel_name'},
  ];

  campos = [
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


  filterSelected: any[] = [];
  filters = [
    {value: 3, nome: 'Filmes com os maiores custos de produção'},
    {value: 4, nome: 'Filmes com os menores custos de produção'},
    {value: 5, nome: 'Filmes com as melhores receitas'},
    {value: 6, nome: 'Filmes com as piores receitas'},
    {value: 7, nome: 'Filmes com maior duração'},
    {value: 8, nome: 'Filmes com menor duração'},];

  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.form.addControl('joins', this.buildJoins());
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

  toggleCharacters() {
    if (this.form.controls['joins'].value[0]) {
      // Adicionar os itens de camposMovies à lista campos
      this.campos.push(...this.camposCharacters); 
    } else {
      // Remover os itens de camposMovies da lista campos
      this.campos = this.campos.filter(item => !this.camposCharacters.includes(item));
    }
  }

  OnChange(){
    this.toggleCharacters();
    
  }

}
