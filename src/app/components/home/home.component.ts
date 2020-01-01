import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public chartLabels: Label[] = ['food','cloths', 'rent','school fees','party','travel'];
  public chartData: number[] = [3000, 2000, 4000,4000,2000,2000];
  public chartType: ChartType = 'pie';
  public chartLegend = true;
  public chartItems = {
    chartLabels: this.chartLabels,
    chartData: this.chartData,
    chartType: this.chartType,
    chartLegend: this.chartLegend
  };

  public tableItems = [{
    name: 'food',
    value: 3000
  },
  {
    name: 'cloths',
    value: 2000
  },
  {
    name: 'rent',
    value: 4000
  },
  {
    name: 'school fees',
    value: 4000
  },
  {
    name: 'food',
    value: 3000
  },
  {
    name: 'party',
    value: 2000
  },
  {
    name: 'travel',
    value: 3000
  }
];
public showTable = this.tableItems.length > 5 ? true : false;

  constructor() { }

  ngOnInit() {
  }

}
