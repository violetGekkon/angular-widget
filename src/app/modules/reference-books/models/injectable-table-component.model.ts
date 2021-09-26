import {ReferenceBook} from '../interfaces/reference-book.interface';
import {toExel} from '../../../ui/functions';
import {MatTable} from '@angular/material/table';

export abstract class InjectableTableComponent {

  abstract dataSource: ReferenceBook[];
  abstract dataGrid: MatTable<ReferenceBook>;
  // abstract dataGrid: DxDataGridComponent

  abstract add(): void;

  export(): void {
    toExel(this.dataGrid);
  }

}
