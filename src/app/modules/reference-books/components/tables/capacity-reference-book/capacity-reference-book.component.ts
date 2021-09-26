import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import {InjectableTableComponent} from '../../../models/injectable-table-component.model';
import {Capacity, ReferenceBook} from '../../../interfaces/reference-book.interface';
import {MatTable} from '@angular/material/table';


@Component({
  selector: 'app-capacity-reference-book',
  templateUrl: './capacity-reference-book.component.html',
  styleUrls: ['./capacity-reference-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CapacityReferenceBookComponent extends InjectableTableComponent {

  // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent
  @ViewChild(MatTable) dataGrid: MatTable<ReferenceBook>;

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
    super();
  }

  add() {

  }

}
