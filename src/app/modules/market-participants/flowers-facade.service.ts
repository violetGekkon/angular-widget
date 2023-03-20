import {Injectable} from '@angular/core';
import {Observable, Subject, timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {TemporaryStorageFacet, TemporaryStorageService} from './services/temporary-storage.service';
import {FlowersHttpService} from './services/flowers-http.service';
import {Flower} from './mock-flowers';

@Injectable()
export class FlowersFacade {

  storageTime = 10 * 1000;
  private _stop = new Subject();
  private flowersTempStorage: TemporaryStorageFacet;

  constructor(private temporaryStorageService: TemporaryStorageService,
              private httService: FlowersHttpService) {
    this.flowersTempStorage = temporaryStorageService.forKey('flowers');
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

  clearTmpStorage() {
    this.flowersTempStorage.remove();
  }

  flowers(): Observable<Flower[]> {
    return this.httService.getFlowers();
  }

}
