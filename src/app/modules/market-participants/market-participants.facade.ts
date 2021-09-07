import {Injectable} from '@angular/core';
import {Observable, Subject, timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {TemporaryStorageFacet, TemporaryStorageService} from './services/temporary-storage.service';
import {IMarketParticipantFilter} from './interfaces/market-participant-filter.interface';
import {IMarketParticipantPage} from './interfaces/market-participant';
import {MarketParticipantHttpService} from './services/market-participant-http.service';

@Injectable()
export class MarketParticipantsFacade {

  storageTime = 10 * 1000;
  private _stop = new Subject();
  private marketParticipantsTempStorage: TemporaryStorageFacet;

  constructor(private temporaryStorageService: TemporaryStorageService,
              private httService: MarketParticipantHttpService) {
    this.marketParticipantsTempStorage = temporaryStorageService.forKey('market_participants');
  }

  startTimer() {
    console.log('start timer');
    timer(this.storageTime).pipe(
      takeUntil(this._stop),
    ).subscribe(t => this.clearTmpStorage());
  }

  stopTimer() {
    console.log('stop timer');
    this._stop.next();
  }

  saveFiltersAndGetFilteredList(filters: IMarketParticipantFilter): Observable<IMarketParticipantPage> {
    this.saveStateInStorage(filters);
    return this.httService.getPage(filters);
  }

  getStateFromStorage(): IMarketParticipantFilter | null {
    return this.marketParticipantsTempStorage.get<IMarketParticipantFilter>();
  }

  saveStateInStorage(val: IMarketParticipantFilter) {
    this.marketParticipantsTempStorage.set(val);
  }

  saveOrgUrlToStorage(url: string) {
    const filters = this.getStateFromStorage();
    this.saveStateInStorage({...filters, organizationUrl: url});
  }

  getOrgUrlFromStorage(): string | null {
    const filters = this.getStateFromStorage();
    return filters && filters.organizationUrl;
  }

  clearTmpStorage() {
    this.marketParticipantsTempStorage.remove();
  }

}
