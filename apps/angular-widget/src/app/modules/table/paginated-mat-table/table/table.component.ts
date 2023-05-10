import { Component, Input, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';
import { TableModel } from '../../decorators/table.model';
import { ColumnModel } from '../../decorators/column.model';
import { tableSymbol } from '../../decorators/column';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  private _data: any[];
  private _tableModel: TableModel;

  @Input() set data(values: any[]) {
    if (values) {
      this._data = cloneDeep(values);
      this._tableModel = this.data[0][tableSymbol];
      this.buildColumns();
    }
  }

  get data(): any[] {
    return this._data;
  }

  columns: ColumnModel[];
  displayedColumns: string[];

  constructor() {}

  ngOnInit() {}

  private buildColumns() {
    this.columns = this._tableModel.columns;
    this.displayedColumns = this.columns.map((col) => col.key);
  }
}
