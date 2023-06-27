import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-hoc',
  templateUrl: './ad-hoc.component.html',
  styleUrls: ['./ad-hoc.component.scss']
})
export class AdHocComponent implements OnInit {

  tableSelected!: string;
  tables: string[] = ['characters', 'movies', 'super-power', 'volumes', 'editors'];
  filterSelected: any[] = [];
  filters = [
      { id: 1, name: 'Filtro 1'},
      { id: 2, name: 'Filtro 2'},
      { id: 3, name: 'Filtro 3'},
      { id: 4, name: 'Filtro 4'},
  ];





  ngOnInit(): void {

  }

  onChange(){
    console.log(this.tableSelected);
  }



}
