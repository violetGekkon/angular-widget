import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class NavigationService {
  private _history: string[] = [];
  private _nextUrl = new ReplaySubject<string>(1);

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this._nextUrl.next(event.urlAfterRedirects);
        this._history.push(event.urlAfterRedirects);
      }
    });
  }

  get history() {
    return this._history;
  }

  get nextUrl(): Observable<string> {
    return this._nextUrl.asObservable();
  }
}
