import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UTMInfo, utmInfo } from './interfaces/utm.model';
import { map } from 'rxjs/operators';
import { DeserializeArray } from 'cerialize';
import { IncomingDocument } from './modules/table/models/incoming-document';
import {
  Page,
  PageRequest,
} from './modules/table/paginated-mat-table/paginated-data-source/intefaces/page.interface';
import { DocumentsQuery } from './modules/table/models/documents';

@Injectable()
export class DataService {
  // utmHost = 'http://utm.middleware.monitor-utm.ru';
  utmHost = 'http://127.0.0.1:8080';
  // тестовое api для проверки запросов
  readonly url = 'http://httpbin.org/post';

  private outEndpoint = 'api/db/out';

  constructor(private httpClient: HttpClient) {}

  getXsdList() {
    return this.httpClient.get<{ name: string; description: string }[]>(
      this.utmHost + '/api/schema/list'
    );
  }

  // Посмотреть схему
  getXsd(name: any) {
    return this.httpClient.get(this.utmHost + '/api/schema/' + name, {
      responseType: 'text',
    });
  }

  getFakeData(): Observable<UTMInfo> {
    return of(utmInfo);
  }

  // Получить список документов
  list(
    request: PageRequest<IncomingDocument>,
    query: DocumentsQuery
  ): Observable<Page<IncomingDocument>> {
    const offset = request.page * request.size;
    return this.httpClient
      .get<any>(`${this.utmHost}/${this.outEndpoint}/list`, {
        params: new HttpParams()
          .set('offset', offset.toString())
          .set('limit', request.size.toString()),
      })
      .pipe(
        map((resp) => {
          return {
            rows: DeserializeArray(resp.rows, IncomingDocument),
            total: resp.total,
            size: request.size,
            number: request.page,
          };
        })
      );
  }
}

export interface QueryBuilder {
  toQueryMap: () => Map<string, string>;
  toQueryString: () => string;
}

export class QueryOptions implements QueryBuilder {
  public offset: number;
  public limit: number;

  constructor() {
    this.offset = 1;
    this.limit = 10;
  }

  toQueryMap() {
    const queryMap = new Map<string, string>();
    queryMap.set('offset', `${this.offset}`);
    queryMap.set('limit', `${this.limit}`);

    return queryMap;
  }

  toQueryString() {
    let queryString = '';
    this.toQueryMap().forEach((value: string, key: string) => {
      queryString = queryString.concat(`${key}=${value}&`);
    });

    return queryString.substring(0, queryString.length - 1);
  }
}
