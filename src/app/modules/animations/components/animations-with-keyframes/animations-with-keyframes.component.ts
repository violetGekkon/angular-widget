import { Component, OnInit } from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-animations-with-keyframes',
  templateUrl: './animations-with-keyframes.component.html',
  styleUrls: ['./animations-with-keyframes.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('close', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      // ...
      transition('* => *', [
        animate('5s', keyframes ( [
          style({ opacity: 0.1, offset: 0.1 }),
          style({ opacity: 0.6, offset: 0.2 }),
          style({ opacity: 1,   offset: 0.5 }),
          style({ opacity: 0.2, offset: 0.7 })
        ]))
      ])
    ])
  ]
})
export class AnimationsWithKeyframesComponent implements OnInit {

  isOpen = true;

  constructor() { }

  ngOnInit() {
  }

}
