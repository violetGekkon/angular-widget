import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FLOWERS, Flower } from '../mock-flowers';

@Injectable()
export class FlowersHttpService {
  constructor(private http: HttpClient) {}

  getFlowers(): Observable<Flower[]> {
    return of(FLOWERS);
  }
}
