import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, timer} from 'rxjs';
import {IMarketParticipant, IMarketParticipantPage} from '../interfaces/market-participant';
import {COUNTERPARTIES, LIC_FILTER, FLOWERS, Flower} from '../mock-flowers';
import {Filter} from '../interfaces/filters.interface';
import {map, switchMap, tap} from 'rxjs/operators';

@Injectable()
export class FlowersHttpService {

  constructor(private http: HttpClient) {
  }

  getFlowers(): Observable<Flower[]> {
    return of(FLOWERS);
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

  getPage(query): Observable<IMarketParticipantPage> {
    return this.http.post<IMarketParticipantPage>('/api/v1/RetailCompanies/SearchCompany', query);
  }

}
