import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MarketParticipantHttpService} from '../../services/market-participant-http.service';
import {firmTypeMap} from '../../interfaces/market-participant';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-market-participant-detail',
  templateUrl: './market-participant-detail.component.html',
  styleUrls: ['./market-participant-detail.component.scss']
})
export class MarketParticipantDetailComponent implements OnInit {

  type$;

  constructor(private route: ActivatedRoute) {
    this.type$ = route.paramMap.pipe(
      tap(paramsMap => console.log(paramsMap.get('marketParticipantUrl'))),
      map(paramsMap => paramsMap.get('marketParticipantUrl'))
    );
  }

  ngOnInit(): void {
  }

}
