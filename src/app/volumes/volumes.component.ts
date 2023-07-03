import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-volumes',
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.scss']
})
export class VolumesComponent {

  @Input() form!: FormGroup;
  joins: string[] = ['editors'];

  camposEditors = [
    { value: 'editors.id', nome: 'editors_id' },
    { value: 'editors.name', nome: 'editors_name' },
    { value: 'editors.hometown', nome: 'editors_hometown' },
    { value: 'editors.country', nome: 'editors_country' },
    { value: 'editors.data_added', nome: 'editors_data_added' },
    { value: 'editors.birth', nome: 'editors_birth' },
    { value: 'editors.gender', nome: 'editors_gender' }
  ];

  campos = [
    { value: 'volumes.id', nome: 'volumes_id' },
    { value: 'volumes.name', nome: 'volumes_name' },
    { value: 'volumes.count_of_issues', nome: 'volumes_count_of_issues' },
    { value: 'volumes.start_year', nome: 'volumes_start_year' },
    { value: 'volumes.description', nome: 'volumes_description' },
    { value: 'volumes.date_added', nome: 'volumes_date_added' }
  ];
  

  filterSelected: any[] = [];
  filters = [
      { value: 10, nome: 'Volumes com mais edições'},
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

  toggleEditors() {
    if (this.form.controls['joins'].value[0]) {
      // Adicionar os itens de camposMovies à lista campos
      this.campos.push(...this.camposEditors); 
    } else {
      // Remover os itens de camposMovies da lista campos
      this.campos = this.campos.filter(item => !this.camposEditors.includes(item));
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
    this.toggleEditors();
  }

}
