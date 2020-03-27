import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {CardItemDirective} from '../../directives/card-item.directive';
import {ListItemDirective} from '../../directives/list-item.directive';

@Component({
  selector: 'app-card-or-list-view',
  templateUrl: './card-or-list-view.component.html',
  styleUrls: ['./card-or-list-view.component.scss']
})
export class CardOrListViewComponent implements OnInit {

  @Input() items: any[] = [];

  @Input() mode: 'card' | 'list' = 'card';

  @ContentChild(CardItemDirective, {static: true, read: TemplateRef}) cardItemTemplate;
  @ContentChild(ListItemDirective, {static: true, read: TemplateRef}) listItemTemplate;
  constructor() { }

  ngOnInit() {
  }

}
