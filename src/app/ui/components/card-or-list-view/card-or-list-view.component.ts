import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {CardItemDirective} from '../../directives/card-item.directive';
import {ListItemDirective} from '../../directives/list-item.directive';

export type ViewMode = 'card' | 'list';
@Component({
  selector: 'app-card-or-list-view',
  templateUrl: './card-or-list-view.component.html',
  styleUrls: ['./card-or-list-view.component.scss']
})
export class CardOrListViewComponent {

  @Input() items: any[] = [];

  @Input() mode: ViewMode = 'card';

  @ContentChild(CardItemDirective, {static: true, read: TemplateRef}) cardItemTemplate;
  @ContentChild(ListItemDirective, {static: true, read: TemplateRef}) listItemTemplate;

}
