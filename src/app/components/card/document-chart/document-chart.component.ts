import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-document-chart',
  templateUrl: './document-chart.component.html',
  styleUrls: ['./document-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DocumentChartComponent implements OnInit {

  public options: any;
  public data: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {

  }

  ngOnInit() {
    // this.setBarChartOptions();
    // this.fetchData();
  }

}
