import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubdivisionDto } from '../../../shared/dto/subdivision.dto';
import { Observable } from 'rxjs';
import { Subdivision } from 'shared/data-access/interfaces';

@Injectable({
  providedIn: 'root',
})
export class MongoDBService {
  SERVER_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  get subdivisions(): Observable<Subdivision[]> {
    return this.httpClient.get<Subdivision[]>(
      `${this.SERVER_URL}/subdivisions`
    );
  }

  createSubdivisionRecord(subdivisionDto: SubdivisionDto) {
    return this.httpClient.post(
      `${this.SERVER_URL}/subdivisions`,
      subdivisionDto
    );
  }
}
