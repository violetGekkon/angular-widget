import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {takeUntil, tap} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {ReferenceBookDefinition} from '../../interfaces/reference-book.interface';


@Component({
  selector: 'app-reference-book-control',
  templateUrl: './reference-book-control.component.html',
  styleUrls: ['./reference-book-control.component.scss'],
})
export class ReferenceBookControlComponent implements OnInit, OnDestroy {

  referenceBookDef: ReferenceBookDefinition;
  onDestroy$ = new Subject();

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.data
      .pipe(
        tap((data: any) => this.referenceBookDef = data?.referenceBookDef),
        takeUntil(this.onDestroy$)
      )
      .subscribe();

  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
