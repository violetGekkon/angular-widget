import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

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
        heading: 'Разное',
        pages: [
          {title: 'CardOrListView', link: '/card-or-list', icon: ''},
          {title: 'Заявление на выдачу марок', link: '/issuance', icon: ''},
          {title: 'mergeMap и т.д.', link: '/map', icon: ''},
          {title: 'Настройки', link: '/settings', icon: ''},
          {title: 'animations', link: '/animations'},
          {title: 'Продукция', link: '/product-list'}
        ]
      },
      {
        heading: 'Таблицы',
        pages: [
          {title: 'Generic Mat Table', link: '/generic-mat-table', icon: ''},
          {title: 'Талица/директивы', link: '/table', icon: ''},
        ]
      },
      {
        heading: 'Ключ доступа',
        pages: [
          {title: 'Формирование RSA', link: '/rsa', icon: ''},
          {title: 'Файлы', link: '/file', icon: ''}
        ]
      }
    ];
  }


}
