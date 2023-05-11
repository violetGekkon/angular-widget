import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flower-detail',
  templateUrl: './flower-detail.component.html',
  styleUrls: ['./flower-detail.component.scss'],
})
export class FlowerDetailComponent implements OnInit {
  type$: Observable<string>;

  constructor(private route: ActivatedRoute) {
    this.type$ = route.paramMap.pipe(
      tap((paramsMap) => console.log(paramsMap.get('id'))),
      map((paramsMap) => paramsMap.get('id'))
    );
  }

  ngOnInit(): void {}
}
