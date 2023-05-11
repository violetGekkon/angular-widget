import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
})
export class NavListComponent implements OnInit {
  @Input() items: [{ title: string; link: string; fragment: string }];

  constructor() {}

  ngOnInit() {}
}
