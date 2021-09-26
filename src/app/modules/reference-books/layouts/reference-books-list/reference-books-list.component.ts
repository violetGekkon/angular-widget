import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Link} from '../../interfaces/reference-book.interface';
import {ActivatedRoute, ResolveEnd, ResolveStart, Router} from '@angular/router';
import {Observable, merge} from 'rxjs';
import {filter, mapTo} from 'rxjs/operators';

@Component({
  selector: 'app-reference-books-list',
  templateUrl: './reference-books-list.component.html',
  styleUrls: ['./reference-books-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReferenceBooksListComponent implements OnInit {

  @Input() links: Link[];
  activeLink: Link;

  isLoading$: Observable<boolean>;
  private _showLoaderEvents$: Observable<boolean>;
  private _hideLoaderEvents$: Observable<boolean>;

  constructor(private router: Router, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this._showLoaderEvents$ = this.router.events
      .pipe(
        filter(e => e instanceof ResolveStart),
        mapTo(true)
      );

    this._hideLoaderEvents$ = this.router.events
      .pipe(
        filter(e => e instanceof ResolveEnd),
        mapTo(false)
      );

    this.isLoading$ = merge(this._showLoaderEvents$, this._hideLoaderEvents$);
  }

  goToDetail(link: Link): void {
    this.activeLink = link;
    this.router.navigate([link.url], { relativeTo: this.route });
  }

}
