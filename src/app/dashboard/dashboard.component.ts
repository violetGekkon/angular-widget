import {Component, InjectionToken, OnDestroy, OnInit} from '@angular/core';
import {DashboardCard} from '../card/model/dashboard-card.model';
import {DashboardCardsService} from '../services/dashboard-card-service.service';
import {Observable, of} from 'rxjs';
import {ViewTableCardComponent} from '../card/view-table-card/view-table-card.component';
import {takeWhile, switchMap} from 'rxjs/operators';
// import {DocumentChartComponent} from '../card/document-chart/document-chart.component';
import {TableComponent} from '../settings-page/table.component';
import {DocumentChartComponent} from '../card/document-chart/document-chart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  entryComponents: [TableComponent]
})
export class DashboardComponent implements OnInit, OnDestroy {

  // cards$: Observable<DashboardCard[]>;
  cards: DashboardCard[] = [];
  count: number;
  counter: Observable<number>;

  constructor() {

  }

  ngOnInit() {

    // const switched = of(1, 2, 3).pipe(switchMap((x: number) => of(x, x ** 2, x ** 3)));
    // switched.subscribe(x => console.log(x));

    this.cards.push(new DashboardCard(
      {
        name: {
          key: DashboardCard.metadata.NAME,
          value: 'Диаграмма докуменов'
        },
        routerLink: {
          key: DashboardCard.metadata.ROUTERLINK,
          value: '/'
        }
      }, DocumentChartComponent
    ));

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
