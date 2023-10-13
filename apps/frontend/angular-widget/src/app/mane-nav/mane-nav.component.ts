import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';

@Component({
  selector: 'app-mane-nav',
  templateUrl: './mane-nav.component.html',
  styleUrls: ['./mane-nav.component.scss'],
  animations: [
    trigger('fadeShowHide', [
      state(
        'show',
        style({
          height: '54px',
          opacity: 1,
        })
      ),
      state(
        'hide',
        style({
          height: '0px',
          opacity: 0,
        })
      ),
      transition('* => *', [animate('200ms')]),
    ]),
  ],
})
export class ManeNavComponent implements OnInit {
  show = 'show';

  scrollingSubscription = new Subscription();
  @ViewChild('main', { read: ElementRef, static: true })
  sidenavContent: ElementRef<any>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public scrollDispatcher: ScrollDispatcher
  ) {}

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  navList: any[];

  ngOnInit() {
    this.navList = [
      {
        heading: 'Разное',
        pages: [
          { title: 'CardOrListView', link: '/card-or-list', icon: '' },
          { title: 'mergeMap и т.д.', link: '/map', icon: '' },
          { title: 'animations', link: '/animations' },
          // { title: 'Продукция', link: '/product-list' },
          { title: 'Комнатные растения', link: 'flowers' },
        ],
      },
      {
        heading: 'Таблицы',
        pages: [
          { title: 'Generic Mat Table', link: '/generic-mat-table', icon: '' },
          { title: 'Талица/директивы', link: '/table', icon: '' },
        ],
      },
      {
        heading: 'Files',
        pages: [
          { title: 'Файлы', link: '/file', icon: '' },
        ],
      },
    ];
  }

  onWindowScroll(data) {
    console.log(data);
  }
}
