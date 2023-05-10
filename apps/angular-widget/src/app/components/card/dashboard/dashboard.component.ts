import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardCard } from '../model/dashboard-card.model';
import { TableComponent } from '../../../table-page/table.component';
import { DocumentChartComponent } from '../document-chart/document-chart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  // cards$: Observable<DashboardCard[]>;
  cards: DashboardCard[] = [];
  count: number;
  counter: Observable<number>;

  constructor() {}

  ngOnInit() {
    // this.counter = new Observable<number>(observer => {
    //   console.log('[takeWhile] Subscribed');
    //
    //   let index = -1;
    //   const interval = setInterval(() => {
    //     index++;
    //     console.log(`[takeWhile] next: ${index}`);
    //     observer.next(index);
    //   }, 1000);
    //
    //   // teardown
    //   return () => {
    //     console.log('[takeWhile] Teardown');
    //     clearInterval(interval);
    //   };
    // });
    //
    // this.counter
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe(
    //     (value) => this.count = value,
    //     (error) => console.error(error),
    //     () => console.log('[takeWhile] complete')
    //   );
  }

  ngOnDestroy() {
    // console.log('[takeWhile] ngOnDestory');
    // this.alive = false;
  }
}
