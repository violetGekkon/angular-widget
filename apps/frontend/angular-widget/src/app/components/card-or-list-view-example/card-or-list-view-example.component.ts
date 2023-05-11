import { Component, OnDestroy, OnInit } from '@angular/core';
import { concat, EMPTY, Subject } from 'rxjs';
import { delay, startWith, takeUntil } from 'rxjs/operators';
import { ViewMode } from '../../ui/components/card-or-list-view/card-or-list-view.component';

@Component({
  selector: 'app-card-or-list-view-example',
  templateUrl: './card-or-list-view-example.component.html',
  styleUrls: ['./card-or-list-view-example.component.scss'],
})
export class CardOrListViewExampleComponent implements OnInit, OnDestroy {
  userMessage: HTMLElement | null | undefined;
  viewMode: ViewMode = 'card';

  items = [
    {
      header: 'Creating Reusable Components with NgTemplateOutlet in Angular',
      content: 'The single responsibility principle...',
    },
    {
      header: 'Creating Reusable Components with NgTemplateOutlet in Angular',
      content: 'The single responsibility principle...',
    },
    {
      header: 'Creating Reusable Components with NgTemplateOutlet in Angular',
      content: 'The single responsibility principle...',
    },
    {
      header: 'Creating Reusable Components with NgTemplateOutlet in Angular',
      content: 'The single responsibility principle...',
    },
    {
      header: 'Creating Reusable Components with NgTemplateOutlet in Angular',
      content: 'The single responsibility principle...',
    },
  ];

  onDestroy$ = new Subject<boolean>();

  ngOnInit() {
    this.userMessage = document.getElementById('message');

    concat(
      delayedMessage('Get Ready!'),
      delayedMessage('3', 4000),
      delayedMessage('2'),
      delayedMessage('1'),
      delayedMessage('Go!')
    ).subscribe({
      next: (x: string) => (this.userMessage!.innerHTML = x),
      error: (err: Error) =>
        console.error(`concat observer got a next value: ${err}`),
      complete: () =>
        console.log(`concat observer got a complete notification`),
    });
  }

  changeMode() {
    this.viewMode = this.viewMode === 'card' ? 'list' : 'card';
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}

// helpers
const delayedMessage = (message: string, delayedTime = 1000) => {
  return EMPTY.pipe(startWith(message), delay(delayedTime));
};
