import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editors',
  templateUrl: './editors.component.html',
  styleUrls: ['./editors.component.scss']
})
export class EditorsComponent {

  @Input() form!: FormGroup;
  joins: string[] = ['volumes', 'characters'];
  filtroEditorEspecifico: boolean = false;

  campos = [
    { value: 'editors.id', nome: 'editors_id' },
    { value: 'editors.name', nome: 'editors_name' },
    { value: 'editors.hometown', nome: 'editors_hometown' },
    { value: 'editors.country', nome: 'editors_country' },
    { value: 'editors.data_added', nome: 'editors_data_added' },
    { value: 'editors.birth', nome: 'editors_birth' },
    { value: 'editors.gender', nome: 'editors_gender' }
  ];

  camposVolumes = [
    { value: 'volumes.id', nome: 'volumes_id' },
    { value: 'volumes.name', nome: 'volumes_name' },
    { value: 'volumes.count_of_issues', nome: 'volumes_count_of_issues' },
    { value: 'volumes.start_year', nome: 'volumes_start_year' },
    { value: 'volumes.description', nome: 'volumes_description' },
    { value: 'volumes.date_added', nome: 'volumes_date_added' }
  ];

  camposCharacters = [
    {value: 'characters.id', nome: 'characters_id'},
    {value: 'characters.name', nome: 'characters_name'},
    {value: 'characters.birth', nome:'characters_birth'},
    {value: 'characters.num_edicoes_aparece', nome:'characters_num_edicoes_aparece'},
    {value: 'characters.description', nome: 'characters_description'},
    {value: 'characters.rel_name', nome: 'characters_rel_name'},
  ];


  filterSelected: any[] = [];
  filters = [ 
    {value: 11, nome: 'Top 10 personagens que mais aparecem em revistas'},
    {value: 12, nome: 'Personagens e revistas feita por um editor'},
    {value: 13, nome: 'Países onde mais reside editores'},
  ];

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

  toggleVolumes() {
    if (this.form.controls['joins'].value[0]) {
      // Adicionar os itens de camposMovies à lista campos
      this.campos.push(...this.camposVolumes);
    } else {
      // Remover os itens de camposMovies da lista campos
      this.campos = this.campos.filter(item => !this.camposVolumes.includes(item));
    }
  }

  toggleCharacters() {
    if (this.form.controls['joins'].value[1]) {
      // Adicionar os itens de camposMovies à lista campos
      this.campos.push(...this.camposCharacters); 
    } else {
      // Remover os itens de camposMovies da lista campos
      this.campos = this.campos.filter(item => !this.camposCharacters.includes(item));
    }
  }

  OnChange(){
    this.toggleCharacters();
    this.toggleVolumes();
    
  }

  verificaFiltro(){
    this.filtroEditorEspecifico = this.form.get('filters')?.value.includes('Personagens e revistas feita por um editor');
    if(this.form.get('filters')?.value.includes(this.filters[0].value) || this.form.get('filters')?.value.includes(this.filters[1].value)){
      this.form.get('joins')?.patchValue([true, true])
    }
    this.OnChange()
  }

  


}
