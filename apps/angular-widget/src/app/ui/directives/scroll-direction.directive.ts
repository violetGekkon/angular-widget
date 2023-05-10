import {
  OnInit,
  OnDestroy,
  Directive,
  NgZone,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';

enum ScrollDirection {
  Up,
  Down,
}

@Directive({
  selector: '[appScrollDirection]',
})
export class ScrollDirectionDirective implements OnInit, OnDestroy {
  @Input() threshold = 100;
  @Input() auditTime = 200;
  @Output() scrolledUp = new EventEmitter();
  @Output() scrolledDown = new EventEmitter();
  private subscription = Subscription.EMPTY;

  constructor(
    private zone: NgZone,
    public scrollDispatcher: ScrollDispatcher
  ) {}

  ngOnInit() {
    this.subscription = this.scrollDispatcher
      .scrolled(this.auditTime)
      .pipe(
        map((data: CdkScrollable) =>
          data.measureScrollOffset('top') >= 200
            ? ScrollDirection.Down
            : ScrollDirection.Up
        ),
        tap((direction: ScrollDirection) => {
          this.zone.run(() => {
            if (direction === ScrollDirection.Up) {
              this.scrolledUp.emit();
            } else {
              this.scrolledDown.emit();
            }
          });
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
