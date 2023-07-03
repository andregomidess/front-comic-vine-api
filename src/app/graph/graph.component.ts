import { FormGroup } from '@angular/forms';
import { GraphService } from './graph.service';
import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto'

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  chart: any;
  @Input() data: any;
  @Input() labels: any;

  ngOnInit(): void {
    //this.createChart();
  }

  onClick(){
    this.createChart();
  }
  constructor(private graphService: GraphService){}



  createChart(){

    this.chart = new Chart("myChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.labels,
	       datasets: [
          {
            data: this.data,
            backgroundColor: 'blue'
          },
        ]
      },
      options: {
        aspectRatio:2.5
      }

    });
  }
}
