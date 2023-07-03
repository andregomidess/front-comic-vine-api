import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-super-power',
  templateUrl: './super-power.component.html',
  styleUrls: ['./super-power.component.scss']
})
export class SuperPowerComponent {

  @Input() form!: FormGroup;
  joins: string[] = ['characters'];

  campos = [
    { value: 'powers.id', nome: 'powers_id' },
    { value: 'powers.name', nome: 'powers_name' },
    { value: 'powers.date_added', nome: 'powers_date_added' },
    { value: 'powers.description', nome: 'powers_description' }
  ];


  camposCharacters = [
    {value: 'characters.id', nome: 'characters_id'},
    {value: 'characters.name', nome: 'characters_name'},
    {value: 'characters.birth', nome:'characters_birth'},
    {value: 'characters.count_of_issue_appearances', nome:'characters_count_of_issue_appearances'},
    {value: 'characters.description', nome: 'characters_description'},
    {value: 'characters.rel_name', nome: 'characters_rel_name'},
  ];

  filterSelected: any[] = [];
  filters = [{value: 9, nome: 'Super Poderes mais recorrentes entre os personagens'}];

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

  verificaFiltro(){
    if(this.form.get('filters')?.value.includes(this.filters[0].value)){
      this.form.get('joins')?.patchValue([true])
    } else {
      this.form.get('joins')?.patchValue([false])
    }
    this.OnChange()
  }

  OnChange(){
    this.toggleCharacters();

  }

}
