import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DashboardCard } from '../components/card/model/dashboard-card.model';

@Injectable()
export class DashboardCardsService {
  constructor() {}

  private card: BehaviorSubject<DashboardCard[]> = new BehaviorSubject<
    DashboardCard[]
  >([]);

  addCard(card: DashboardCard): void {
    this.card.next(this.card.getValue().concat(card));
  }

  get cards(): Observable<DashboardCard[]> {
    return this.card.asObservable();
  }

  // removeCard(card: DashboardCard): void {
  //   this.cards.next(this.cards.getValue().detach(card));
  // }
}
