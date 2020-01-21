import {Component, OnInit} from '@angular/core';
import {Location, ViewportScroller} from '@angular/common';
import {DashboardCardsService} from './services/dashboard-card-service.service';

import {ViewTableCardComponent} from './card/view-table-card/view-table-card.component';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Router, Scroll, NavigationEnd} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {MediaObserver} from '@angular/flex-layout';
import {TestService} from './test/test.service';
const COLORS = [
  '#ea4335',
  '#4285f4',
  '#fbbc04',
  '#34a853',
  '#fa7b17',
  '#f538a0',
  '#a142f4',
  '#24c1e0',
  '#9aa0a6',
  '#5195ea',
  '#e25142',
  '#f5c518',
  '#41af6a',
  '#f6aea9',
  '#a50e0e',
  '#aecbfa',
  '#174ea6',
  '#fde293',
  '#a8dab5',
  '#0d652d',
  '#fdc69c',
  '#fba9d6',
  '#c92786',
  '#d7aefb',
  '#8430ce',
  '#a1e4f2',
  '#007b83',
  '#e8eaed',
  '#b9d4f6',
  '#f3b9b3',
  '#fbe7a2',
  '#b3dfc3',
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  entryComponents: [ViewTableCardComponent],
  providers: [DashboardCardsService]
})
export class AppComponent implements OnInit {

  cols$;
  cols_sml$;


  constructor(
    private breakpointObserver: BreakpointObserver,
    private mediaObserver: MediaObserver,
    private testSrv: TestService
    ) { }

  ngOnInit() {

    this.testSrv.parseXml();

    const breakpointsGrid: { [size: string]: number } = {
      ['xs']: 1,
      ['sm']: 1,
      ['md']: 4,
      ['lg']: 12,
      ['xl']: 12
    };

    const breakpointsColsSm: { [size: string]: number } = {
      ['xs']: 1,
      ['sm']: 1,
      ['md']: 2,
      ['lg']: 3,
      ['xl']: 3
    };

    this.mediaObserver.media$.subscribe(data => console.log('---------------------------------------------------------------------------------------------------------------' + data.mqAlias));

    /* Определяем количество столбцов в сетке */
    this.cols$ = this.mediaObserver.media$.pipe(
      map(x => {

        return breakpointsGrid[x.mqAlias];
      })
    );

    /* Определяем количество столбцов для небольших виджетов */
    this.cols_sml$ = this.mediaObserver.media$.pipe(
      map(x => breakpointsColsSm[x.mqAlias]));

    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log(
            'Breakpoints.XSmall mode'          );

          console.log(
            'width XSmall: ' + document.documentElement.clientWidth
          );
          console.log(
            'height XSmall: ' + document.documentElement.clientHeight
          );

        }
      });
    this.breakpointObserver
      .observe([Breakpoints.Small])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log(
            'Breakpoints.Small mode'
          );
          console.log(
            'width Small: ' + document.documentElement.clientWidth
          );
          console.log(
            'height Small: ' + document.documentElement.clientHeight
          );
        }
      });
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log(
            'Breakpoints.Handset mode'
          );
          console.log(
            'width Handset: ' + document.documentElement.clientWidth
          );
          console.log(
            'height Handset: ' + document.documentElement.clientHeight
          );
        }
      });
    this.breakpointObserver
      .observe([Breakpoints.HandsetLandscape])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log(
            'Breakpoints.HandsetLandscape mode'
          );
          console.log(
            'width HandsetLandscape: ' + document.documentElement.clientWidth
          );
          console.log(
            'height HandsetLandscape: ' + document.documentElement.clientHeight
          );
        }
      });
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log(
            'Breakpoints.HandsetPortrait mode'
          );
          console.log(
            'width  HandsetPortrait: ' + document.documentElement.clientWidth
          );
          console.log(
            'height  HandsetPortrait: ' + document.documentElement.clientHeight
          );
        }
      });
    this.breakpointObserver
      .observe([Breakpoints.Medium])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log(
            'Breakpoints.Medium mode'
          );
          console.log(
            'width Medium: ' + document.documentElement.clientWidth
          );
          console.log(
            'height Medium: ' + document.documentElement.clientHeight
          );
        }
      });
    this.breakpointObserver
      .observe([Breakpoints.Tablet])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log(
            'Breakpoints.Tablet mode'
          );
          console.log(
            'width Tablet: ' + document.documentElement.clientWidth
          );
          console.log(
            'height Tablet: ' + document.documentElement.clientHeight
          );
        }
      });
    this.breakpointObserver
      .observe([Breakpoints.TabletLandscape])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log(
            'Breakpoints.TabletLandscape mode'
          );
          console.log(
            'width TabletLandscape: ' + document.documentElement.clientWidth
          );
          console.log(
            'height TabletLandscape: ' + document.documentElement.clientHeight
          );
        }
      });
    this.breakpointObserver
      .observe([Breakpoints.TabletPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log(
            'Breakpoints.TabletPortrait mode'
          );
          console.log(
            'width TabletPortrait: ' + document.documentElement.clientWidth
          );
          console.log(
            'height TabletPortrait: ' + document.documentElement.clientHeight
          );
        }
      });
    this.breakpointObserver
      .observe([Breakpoints.Web])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log(
            'Breakpoints.Web mode'
          );
          console.log(
            'width Web: ' + document.documentElement.clientWidth
          );
          console.log(
            'height Web: ' + document.documentElement.clientHeight
          );
        }
      });
    this.breakpointObserver
      .observe([Breakpoints.WebLandscape])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log(
            'Breakpoints.WebLandscape mode'
          );
          console.log(
            'width WebLandscape: ' + document.documentElement.clientWidth
          );
          console.log(
            'height WebLandscape: ' + document.documentElement.clientHeight
          );
        }
      });
    this.breakpointObserver
      .observe([Breakpoints.WebPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log(
            'Breakpoints.WebPortrait mode'
          );
          console.log(
            'width WebPortrait: ' + document.documentElement.clientWidth
          );
          console.log(
            'height WebPortrait: ' + document.documentElement.clientHeight
          );
        }
      });
    this.breakpointObserver
      .observe([Breakpoints.Large])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log(
            'Breakpoints.Large mode'
          );
          console.log(
            'width Large: ' + document.documentElement.clientWidth
          );
          console.log(
            'height Large: ' + document.documentElement.clientHeight
          );
        }
      });
    this.breakpointObserver
      .observe([Breakpoints.XLarge])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log(
            'Breakpoints.XLarge mode'
          );
          console.log(
            'width XLarge: ' + document.documentElement.clientWidth
          );
          console.log(
            'height XLarge: ' + document.documentElement.clientHeight
          );
        }
      });
  }

  getColor() {
    return COLORS[Math.floor(Math.random() * 32)];
  }
}
