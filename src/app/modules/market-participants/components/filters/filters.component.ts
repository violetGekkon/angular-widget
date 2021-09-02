import {Component, Input, OnInit} from '@angular/core';
import {ActiveFilter, Filter} from '../../interfaces/filters.interface';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input() group: string;
  @Input() filters: Filter[] = [];

  changeFilter = new BehaviorSubject<Filter[]>([]);

  constructor() {
  }

  ngOnInit(): void {
  }

  select(filter: Filter) {

    filter.active = !filter.active;
    this.changeFilter.next(this.filters);
  }

}
