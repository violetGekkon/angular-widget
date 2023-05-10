import { Component, OnInit } from '@angular/core';
import { DashboardCardsService } from './services/dashboard-card-service.service';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MediaObserver } from '@angular/flex-layout';

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
  providers: [DashboardCardsService],
})
export class AppComponent implements OnInit {

  constructor(
    private breakpointObserver: BreakpointObserver,
    private mediaObserver: MediaObserver
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.TabletPortrait])
      .subscribe((result) => console.log(result));

    const breakpointsGrid: { [size: string]: number } = {
      ['xs']: 1,
      ['sm']: 1,
      ['md']: 4,
      ['lg']: 12,
      ['xl']: 12,
    };

    const breakpointsColsSm: { [size: string]: number } = {
      ['xs']: 1,
      ['sm']: 1,
      ['md']: 2,
      ['lg']: 3,
      ['xl']: 3,
    };

    this.mediaObserver
      .asObservable()
      .subscribe((data) =>
        console.log(
          '---------------------------------------------------------------------------------------------------------------' +
            data
        )
      );
  }

  getColor() {
    return COLORS[Math.floor(Math.random() * 32)];
  }
}
