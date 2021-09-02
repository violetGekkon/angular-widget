import {Injectable} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Observable, of, timer} from 'rxjs';
import {IMarketParticipant} from '../interfaces/market-participant';
import {COUNTERPARTIES, LIC_FILTER, MARKET_PARTICIPANTS} from '../mock-market-participant';
import {Filter} from '../interfaces/filters.interface';
import {map, switchMap, tap} from 'rxjs/operators';

@Injectable()
export class MarketParticipantHttpService {

  constructor(private http: HttpClientModule) {
  }

  getAllMarketParticipants(): Observable<IMarketParticipant[]> {
    return of(MARKET_PARTICIPANTS);
  }

  getCounterparties(): Observable<IMarketParticipant[]> {
    return of(COUNTERPARTIES);
  }

  getLicenseGroup(): Observable<Filter[]> {
    let count = 0;
    return timer(5000, 10000)
      .pipe(
        tap(_ => count = count + 1),
        switchMap(_ => of(LIC_FILTER.map(val => ({...val, count: (+val.count + count).toString()})))
        )
      );
  }
}
