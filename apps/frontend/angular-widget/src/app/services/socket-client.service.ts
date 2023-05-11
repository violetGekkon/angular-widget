import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import * as SockJS from 'sockjs-client';
import { filter, first, switchMap } from 'rxjs/operators';
import { Client, over, StompSubscription } from '@stomp/stompjs';

export enum SocketClientState {
  ATTEMPTING,
  CONNECTED,
}

@Injectable({
  providedIn: 'root',
})
export class SocketClientService implements OnDestroy {
  private client: Client;
  private state: BehaviorSubject<SocketClientState>;

  constructor() {
    this.client = over(new SockJS(''));
    this.state = new BehaviorSubject<SocketClientState>(
      SocketClientState.ATTEMPTING
    );
    this.client.connect({}, () => {
      this.state.next(SocketClientState.CONNECTED);
    });
  }

  private connect(): Observable<Client> {
    return new Observable<Client>((observer) => {
      this.state
        .pipe(filter((state) => state === SocketClientState.CONNECTED))
        .subscribe(() => {
          observer.next(this.client);
        });
    });
  }

  onMessage(topic: string): Observable<any> {
    return this.connect().pipe(
      first(),
      switchMap((client) => {
        return new Observable<any>((observer) => {
          const subscription: StompSubscription = client.subscribe(
            topic,
            (message) => {
              observer.next(JSON.parse(message.body));
            }
          );
          // return () => subscription.unsubscribe();
        });
      })
    );
  }

  ngOnDestroy() {
    this.connect()
      .pipe(first())
      .subscribe((client) => client.disconnect(null));
  }
}
