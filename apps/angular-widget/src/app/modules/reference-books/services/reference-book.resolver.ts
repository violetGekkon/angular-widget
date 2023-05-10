import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { ReferenceBooksHttpService } from './reference-books-http.service';
import { delay, map } from 'rxjs/operators';
import { CapacityReferenceBookComponent } from '../components/tables/capacity-reference-book/capacity-reference-book.component';
import { ReferenceBookDefinition } from '../interfaces/reference-book.interface';

@Injectable()
export class ReferenceBookResolver implements Resolve<any> {
  constructor(private referenceBookApi: ReferenceBooksHttpService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ReferenceBookDefinition> {
    const url = route.paramMap.get('referenceBookUrl');
    return this.referenceBookApi.loadAllCourseLessonsSummary(url).pipe(
      delay(3000),
      map((response) => ({
        type: CapacityReferenceBookComponent,
        data: response,
      }))
    );
  }
}
