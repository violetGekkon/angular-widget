import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import {Capacity, InjectableTableComponent} from '../../../interfaces/reference-book.interface';


@Component({
  selector: 'app-capacity-reference-book',
  templateUrl: './capacity-reference-book.component.html',
  styleUrls: ['./capacity-reference-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CapacityReferenceBookComponent implements OnInit, InjectableTableComponent {

  displayedColumns: string[] = ['code', 'capacity'];
  private _dataSource: Capacity[];

  @Input() set dataSource(data: Capacity[]) {
    this._dataSource = data;
    this.cdr.detectChanges();
  };

  get dataSource(): Capacity[] {
    return this._dataSource;
  }

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

}
