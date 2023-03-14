import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FlowersHttpService} from '../../services/flowers-http.service';
import {firmTypeMap} from '../../interfaces/market-participant';
import {map, tap} from 'rxjs/operators';
import {FlowersFacade} from '../../flowers-facade.service';

@Component({
  selector: 'app-market-participant-detail',
  templateUrl: './market-participant-detail.component.html',
  styleUrls: ['./market-participant-detail.component.scss']
})
export class MarketParticipantDetailComponent implements OnInit {

  type$;

  constructor(private route: ActivatedRoute) {
    this.type$ = route.paramMap.pipe(
      tap(paramsMap => console.log(paramsMap.get('id'))),
      map(paramsMap => paramsMap.get('id'))
    );
  }

  ngOnInit(): void {
  }

}
