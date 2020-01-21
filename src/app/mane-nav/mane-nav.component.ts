import {Component, Input, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {MatAccordion, MatExpansionPanel} from '@angular/material';
import {Location, ViewportScroller} from '@angular/common';
import {Route, Router, Scroll} from '@angular/router';

@Component({
  selector: 'app-mane-nav',
  templateUrl: './mane-nav.component.html',
  styleUrls: ['./mane-nav.component.scss']
})
export class ManeNavComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  navList: any[];


  ngOnInit() {


    this.navList = [
      {
        heading: 'Сервисы',
        pages: [
          {title: 'УТМ', link: '/test1', icon: ''},
          {title: 'Проверка марок', link: '/', icon: ''},
          {title: 'Талица/директивы', link: '/settings', icon: ''},
          {title: 'mergeMap и т.д.', link: '/map', icon: ''}
        ]
      },
      {
        heading: 'Ключ доступа',
        pages: [
          {title: 'Формирование RSA', link: '/rsa', icon: ''},
          {title: 'Перенос остатков', link: '/', icon: ''},
          {title: 'Тестовый RSA', link: '/', icon: ''},
          {title: 'Файлы', link: '/file', icon: ''}
        ]
      },
      {
        heading: 'Справочники',
        pages: [
          {title: 'Номенклатура', link: '/', icon: ''},
          {title: 'Контрагенты', link: '/', icon: ''},
          {title: 'Журнал продаж', link: '/', icon: ''}
        ]
      }
    ];
  }


}
