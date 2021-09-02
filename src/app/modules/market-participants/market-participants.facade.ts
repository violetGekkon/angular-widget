import {Injectable} from '@angular/core';
import {Subject, timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {TemporaryStorageFacet, TemporaryStorageService} from './services/temporary-storage.service';

@Injectable()
export class MarketParticipantsFacade {

  storageTime = 10 * 60 * 1000;
  private _stop = new Subject();
  private marketParticipantsTempStorage: TemporaryStorageFacet;

  constructor(temporaryStorageService: TemporaryStorageService) {
    this.marketParticipantsTempStorage = temporaryStorageService.forKey('market_participants');
  }

  start() {
    timer(0, this.storageTime).pipe(
      takeUntil(this._stop),
    ).subscribe(t => this.marketParticipantsTempStorage.remove());
  }

  stop() {
    this._stop.next();
  }

  getFilters() {
    this.marketParticipantsTempStorage.get();
  }

  setFilters(val) {
    this.marketParticipantsTempStorage.set(val);
  }

}
