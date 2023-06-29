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
  joins: string[] = ['characters', 'movies', 'editors', 'volumes', 'super-power'];
  tables: string[] = ['characters', 'movies', 'super-power', 'volumes', 'editors'];

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

  onSubmit(){
    

    let valueSubmit = Object.assign({}, this.tableForm.value);
    valueSubmit = Object.assign(valueSubmit, {
      joins: valueSubmit.joins.map((v:any, i:any) => v ? this.joins[i] : null)
      .filter((v:any) => v !== null)
    });
    console.log(valueSubmit);
    if (this.tableForm.valid){
      this.http
        .post('https://httpbin.org/post', JSON.stringify({valueSubmit}))
        .subscribe(
          dados => {
            console.log(dados);
          },
          (error: any) => alert('erro')
        );
    }
  }


}
