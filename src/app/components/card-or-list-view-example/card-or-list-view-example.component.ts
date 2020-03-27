import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-or-list-view-example',
  templateUrl: './card-or-list-view-example.component.html',
  styleUrls: ['./card-or-list-view-example.component.scss']
})
export class CardOrListViewExampleComponent implements OnInit {

  mode = 'card';
  items = [
    {
      header: 'Creating Reuseable Components with NgTemplateOutlet in Angular',
      content: 'The single responsibility principle...'
    },
    {
      header: 'Creating Reuseable Components with NgTemplateOutlet in Angular',
      content: 'The single responsibility principle...'
    },
    {
      header: 'Creating Reuseable Components with NgTemplateOutlet in Angular',
      content: 'The single responsibility principle...'
    },
    {
      header: 'Creating Reuseable Components with NgTemplateOutlet in Angular',
      content: 'The single responsibility principle...'
    },
    {
      header: 'Creating Reuseable Components with NgTemplateOutlet in Angular',
      content: 'The single responsibility principle...'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
