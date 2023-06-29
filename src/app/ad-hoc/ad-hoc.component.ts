import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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

  constructor(private fb: FormBuilder){ }


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


}
