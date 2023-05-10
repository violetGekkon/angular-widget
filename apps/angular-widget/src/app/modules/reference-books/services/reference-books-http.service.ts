import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ReferenceBook } from '../interfaces/reference-book.interface';
import { CapacityReferenceBook } from '../reference-book-mock';

@Injectable()
export class ReferenceBooksHttpService {
  loadAllCourseLessonsSummary(url: string): Observable<ReferenceBook[]> {
    return of(CapacityReferenceBook);
  }
}
