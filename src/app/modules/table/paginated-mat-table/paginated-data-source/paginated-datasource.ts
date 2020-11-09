import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Page, PaginatedEndpoint} from './intefaces/page.interface';
import {map, share, startWith, switchMap} from 'rxjs/operators';
import {indicate} from './operators';

export interface SimpleDataSource<T> extends DataSource<T> {
  connect(): Observable<T[]>;
  disconnect(): void;
}

export class PaginatedDataSource<T, Q> implements SimpleDataSource<T> {
  private pageNumber = new Subject<number>();
  private query: BehaviorSubject<Q>;
  private loading = new Subject<boolean>();

  public loading$ = this.loading.asObservable();
  public page$: Observable<Page<T>>;

  constructor(
    private endpoint: PaginatedEndpoint<T, Q>,
    initialQuery: Q,
    public pageSize = 10) {
    this.query = new BehaviorSubject<Q>(initialQuery);

    this.page$ = this.query.pipe(
      switchMap((query) => this.pageNumber.pipe(
        startWith(0),
        switchMap(page => this.endpoint({page, size: this.pageSize}, query)
          .pipe(indicate(this.loading))
        )
      )),
      share()
    );
  }

  queryBy(query: Partial<Q>): void {
    const lastQuery = this.query.getValue();
    const nextQuery = {...lastQuery, ...query};
    this.query.next(nextQuery);
  }

  fetch(page: number): void {
    this.pageNumber.next(page);
  }

  connect(): Observable<T[]> {
    return this.page$.pipe(map(page => page.rows));
  }

  disconnect(): void {}

}

