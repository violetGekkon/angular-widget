import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-document-chart',
  templateUrl: './document-chart.component.html',
  styleUrls: ['../../../../node_modules/nvd3/build/nv.d3.css'],
  encapsulation: ViewEncapsulation.None
})
export class DocumentChartComponent implements OnInit {

  public options: any;
  public data: any;

  constructor() {
  }

  ngOnInit() {
    this.setBarChartOptions();
    this.fetchData();
  }

  setBarChartOptions() {
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 250,
        margin: {
          top: 15,
          right: 10,
          bottom: 50,
          left: 35
        },
        x: function (d) {
          return d.label;
        },
        y: function (d) {
          return d.value;
        },
        duration: 500,
        xAxis: {
          axisLabel: 'Тип документа'
        },
        yAxis: {
          tickFormat: d3.format('.f'),
          // axisLabel: 'Y Axis',
          // axisLabelDistance: -10
        }
      }
    };
  }

  fetchData() {

    this.data = [
      {
        key: 'Cumulative Return',
        values: [
          {
            'label': 'Чеки',
            'value': 5000
          },
          {
            'label': 'Исходящие',
            'value': 1500
          },
          {
            'label': 'Входящие',
            'value': 3000
          }
        ]
      }
    ];
  }

}
