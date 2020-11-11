import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {animate, query, style, transition, trigger} from '@angular/animations';

const ShakeAnimation = [
  style({transform: 'rotate(0)'}),
  animate('0.1s', style({transform: 'rotate(2deg)'})),
  animate('0.1s', style({transform: 'rotate(-4deg)'})),
  animate('0.1s', style({transform: 'rotate(4deg)'})),
  animate('0.1s', style({transform: 'rotate(0)'})),
];

@Component({
  selector: 'app-query-animations',
  templateUrl: './query-animations.component.html',
  styleUrls: ['./query-animations.component.scss'],
  animations: [
    trigger('queryShake', [
      transition('* => default', [
        query('.card', ShakeAnimation)
      ]),
      transition('* => withLimit', [
        query('.card', ShakeAnimation, {
          limit: 2,
        }),
      ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryAnimationsComponent implements OnInit {

  show = '';

  constructor() {
  }

  ngOnInit() {
  }

  onDone() {
    this.show = '';
  }
}
