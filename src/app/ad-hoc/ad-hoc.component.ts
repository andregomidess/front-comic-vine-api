import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


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
    this.tableForm.removeControl('joins');
    this.tableForm.get('filters')?.reset();
    this.tableForm.get('campos')?.reset();
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
    this.http.get(`http://localhost:3000/query?table=${table}&select=${selects}&joins=${joins}&filter=${filter}`)
  .subscribe(
    data => {
      // Manipule a resposta da requisição aqui
      this.req = data;
      this.req = this.req[table]
      this.columns = Object.keys(this.req[0]);
      console.log(Object.values(this.req));
    },
    error => {
      // Manipule o erro da requisição aqui
      console.error(error);
    }
  );

  }


}
