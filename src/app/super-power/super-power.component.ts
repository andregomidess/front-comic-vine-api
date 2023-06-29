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
    { value: 'super_powers.id', nome: 'super_powers_id' },
    { value: 'super_powers.name', nome: 'super_powers_name' },
    { value: 'super_powers.data_added', nome: 'super_powers_data_added' },
    { value: 'super_powers.description', nome: 'super_powers_description' }
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
  filters = [{value: 12, nome: 'Super Poderes mais recorrentes'}];

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
