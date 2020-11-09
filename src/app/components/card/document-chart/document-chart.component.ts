import {AfterViewInit, Component, HostListener, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {NvD3Component} from 'ng2-nvd3';
// import d3 from 'd3';

@Component({
  selector: 'app-document-chart',
  templateUrl: './document-chart.component.html',
  styleUrls: ['../../../../../node_modules/nvd3/build/nv.d3.css'],
  encapsulation: ViewEncapsulation.None
})
export class DocumentChartComponent implements OnInit, AfterViewInit {

  public options: any;
  public data: any;
  // @ViewChild('chart', {read: NvD3Component, static: false}) chart: NvD3Component;

  @HostListener('window:resize', ['$event'])
  onResize(event) {

  }

  ngOnInit() {
    // this.setBarChartOptions();
    // this.fetchData();
  }

  setBarChartOptions() {
    this.options = {
      chart: {
        type: 'discreteBarChart',
        // width: 100,
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

  ngAfterViewInit() {
    // setTimeout(() => this.chart.updateSize(), 100);
  }

}
