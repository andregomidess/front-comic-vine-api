import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-ad-hoc',
  templateUrl: './ad-hoc.component.html',
  styleUrls: ['./ad-hoc.component.scss']
})
export class AdHocComponent implements OnInit {

  tableSelected!: string;
  tableForm!: FormGroup;
  joins: string[] = ['characters', 'movies', 'editors', 'volumes', 'powers'];
  tables: string[] = ['characters', 'movies', 'powers', 'volumes', 'editors'];
  submitted: boolean = false;
  req!: any;
  columns!: string[]
  httpSubscription!: Subscription
  labels: any;
  dataGraph: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    ){ }


  ngOnInit(): void {
    this.tableForm = this.fb.group({
      table: [null],
      filters: [null],
      campos: [null],
    })
  }

  buildJoins(){
    const values = this.joins.map(v => new FormControl(false));
    return this.fb.array(values);
  }

  onChange(){

    this.submitted = false;
    this.tableForm.removeControl('joins');
    this.tableForm.get('filters')?.reset();
    this.tableForm.get('campos')?.reset();
    this.destroySubs();
    this.req.splice(0, this.req.length);
    this.labels.splice(0, this.labels.length);
    this.dataGraph.splice(0, this.dataGraph.length);
  }

  arrayToString(array: any[]): string{
    if(array != null || undefined){
      if (array.length <= 1){
        return array[0];
      }else{
        return array.join(',');
      }
    }
    return '';


  }

  onSubmit(){

    this.submitted = true;
    let valueSubmit = Object.assign({}, this.tableForm.value);
    valueSubmit = Object.assign(valueSubmit, {
      joins: valueSubmit.joins.map((v:any, i:any) => v ? this.joins[i] : null)
      .filter((v:any) => v !== null)
    });
    console.log(valueSubmit);
    const selects = this.arrayToString(valueSubmit.campos);
    const joins = this.arrayToString(valueSubmit.joins);
    const table = valueSubmit.table;
    const filter = String(valueSubmit.filters);
    this.httpSubscription = this.http.get(`http://localhost:3000/query?table=${table}&select=${selects}&joins=${joins}&filter=${filter}&limit=100`)
  .subscribe(
    data => {
      // Manipule a resposta da requisição aqui
      this.req = data;
      this.req = this.req[table]
      this.columns = Object.keys(this.req[0]);
      //console.log(this.tableForm.get('filters')?.value[0] == '1');
      this.getLabels();
      this.getData();
    },
    error => {
      // Manipule o erro da requisição aqui
      console.error(error);
    }
  );

  }

  destroySubs(){
    this.httpSubscription.unsubscribe();
  }

  getLabels(){

    if (this.tableForm.get('filters') != null){
      switch(this.tableForm.get('filters')?.value[0]){
        case 1:
          this.labels = this.req.map((obj: { name: any; }) => obj.name);
          break;
        case 9:
          this.labels = this.req.map((obj: { name: any; }) => obj.name);
          break;
        case 10:
          this.labels = this.req.map((obj: { name: any; }) => obj.name);
          break;
        case 11:
          this.labels = this.req.map((obj: { name: any; }) => obj.name);
          break;
        case 13:
          this.labels = this.req.map((obj: { country: any; }) => obj.country);
          break;
      }
    }


  }

  getData(){

    if (this.tableForm.get('filters') != null){
      switch(this.tableForm.get('filters')?.value[0]){
        case 1:
          this.dataGraph = this.req.map((obj: { movies_appearances: any; }) => obj.movies_appearances);
          break;
        case 9:
          this.dataGraph = this.req.map((obj: { power_appareances: any; }) => obj.power_appareances);
          break;
        case 10:
          this.dataGraph = this.req.map((obj: { count_of_issues: any; }) => obj.count_of_issues);
          break;
        case 11:
          this.dataGraph = this.req.map((obj: { volumes_written: any; }) => obj.volumes_written);
          break;
        case 13:
          this.dataGraph = this.req.map((obj: { editors_nationality: any; }) => obj.editors_nationality);
          break;
      }
    }

  }

}
