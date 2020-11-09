import {NgModule} from '@angular/core';
import {SharedModule} from '../../ui/shared/shared.module';
import {RouterModule} from '@angular/router';
import {TableComponent} from './paginated-mat-table/table/table.component';
import {TablesTabComponent} from './tables-tab/tables-tab.component';


@NgModule({
  declarations: [TableComponent, TablesTabComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: TablesTabComponent}
    ])
  ]
})
export class TablesModule {
}
