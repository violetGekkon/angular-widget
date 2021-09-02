import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Injectable()
export class NavigationService {

  private _history: string[] = [];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this._history.push(event.urlAfterRedirects);
      }
    });
  }

  get history() {
    return this._history;
  }
}
