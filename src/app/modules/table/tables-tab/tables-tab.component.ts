import {Component, OnInit} from '@angular/core';
import {IncomingDocument} from '../models/incoming-document';
import {DataService} from '../../../data.service';
import {DocumentsQuery} from '../models/documents';

import {PaginatedDataSource} from '../paginated-mat-table/paginated-data-source/paginated-datasource';

@Component({
  selector: 'app-tables-tab',
  templateUrl: './tables-tab.component.html',
  styleUrls: ['./tables-tab.component.scss']
})
export class TablesTabComponent implements OnInit {

  displayedColumns = ['id', 'docType', 'state', 'createTimestamp', 'uuid'];
  data: PaginatedDataSource<IncomingDocument, DocumentsQuery>;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.data = new PaginatedDataSource<IncomingDocument, DocumentsQuery>(
      (request, query) => this.dataService.list(request, query),
      {filter: ''},
      10
    );
  }

  rowClicked(row) {
    console.log(row);
  }

}
