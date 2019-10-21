import {Component, OnDestroy, OnInit} from '@angular/core';
import {DashboardCard} from '../card/model/dashboard-card.model';
import {DashboardCardsService} from '../services/dashboard-card-service.service';
import {Observable} from 'rxjs';
import {ViewTableCardComponent} from '../card/view-table-card/view-table-card.component';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  cards$: Observable<DashboardCard[]>;
  private alive = true;
  count: number;
  counter: Observable<number>;

  constructor(private cardsService: DashboardCardsService) {
    this.cards$ = this.cardsService.cards;
  }

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
