import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {UTMInfo, utmInfo} from './interfaces/utm.model';

@Injectable()
export class DataService {

  utmHost = 'http://127.0.0.1:3001';

  constructor(private httpClient: HttpClient) {
  }

  getXsdList() {
    return this.httpClient.get<{ name: string, description: string }[]>(this.utmHost + '/api/schema/list');
  }

  // Посмотреть схему
  getXsd(name: any) {
    return this.httpClient.get(this.utmHost + '/api/schema/' + name, {responseType: 'text'});
  }


  getFakeData(): Observable<UTMInfo> {
    return of(utmInfo);
  }

}
