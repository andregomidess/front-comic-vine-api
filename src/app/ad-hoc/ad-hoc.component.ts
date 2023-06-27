import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-hoc',
  templateUrl: './ad-hoc.component.html',
  styleUrls: ['./ad-hoc.component.scss']
})
export class AdHocComponent implements OnInit {

  opSelected: string = '';

  ngOnInit(): void {
    
  }

  onChange(){
    console.log(this.opSelected);
  }
  

}
