import {Injectable} from '@angular/core';
import {Observable, Subject, timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {TemporaryStorageFacet, TemporaryStorageService} from './services/temporary-storage.service';
import {IMarketParticipantFilter} from './interfaces/market-participant-filter.interface';
import {IMarketParticipantPage} from './interfaces/market-participant';
import {MarketParticipantHttpService} from './services/market-participant-http.service';
import {NavigationService} from '../../services/navigation.service';

@Injectable()
export class MarketParticipantsFacade {

  storageTime = 10 * 1000;
  private _stop = new Subject();
  private marketParticipantsTempStorage: TemporaryStorageFacet;

  constructor(temporaryStorageService: TemporaryStorageService,
              private httService: MarketParticipantHttpService,
              private navigation: NavigationService) {
    this.marketParticipantsTempStorage = temporaryStorageService.forKey('market_participants');
    this.navigation.nextUrl
      .subscribe(val => {
        if (!val.includes('market-participants')) {
          if (this.getFilters()) {
            this.start();
          }
        } else {
          this.stop();
        }
      });
  }

  start() {
    console.log('start timer');
    timer(this.storageTime).pipe(
      takeUntil(this._stop),
    ).subscribe(t => this.marketParticipantsTempStorage.remove());
  }

  stop() {
    console.log('stop timer');
    this._stop.next();
  }

  getFilters(): IMarketParticipantFilter | null {
    return this.marketParticipantsTempStorage.get<IMarketParticipantFilter>();
  }

  setFilters(val: IMarketParticipantFilter) {
    this.marketParticipantsTempStorage.set(val);
  }

  saveFiltersAndGetFilteredList(filters: IMarketParticipantFilter): Observable<IMarketParticipantPage> {
    this.setFilters(filters);
    return this.httService.getPage(filters);
  }


  saveOrgUrlToStorage(url: string) {
    const filters = this.getFilters();
    this.setFilters({...filters, organizationUrl: url});
  }

}
