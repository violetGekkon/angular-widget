import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RsaPageComponent} from './components/rsa-page/rsa-page.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MapExampleComponent} from './map-example/map-example.component';
import {TableComponent} from './table-page/table.component';
import {FileComponent} from './file/file.component';
import {CardOrListViewExampleComponent} from './components/card-or-list-view-example/card-or-list-view-example.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, pathMatch: 'full'},
  {path: 'rsa', component: RsaPageComponent},
  {path: 'table', component: TableComponent},
  {
    path: 'issuance', loadChildren:
      () => import('./modules/barcode-issuance/barcode-issuance.module').then(m => m.BarcodeIssuanceModule)
  },
  {
    path: 'animations', loadChildren:
      () => import('./modules/animations/animations.module').then(m => m.AnimationsModule)
  },
  {
    path: 'generic-mat-table', loadChildren:
      () => import('./modules/table/tables.module').then(m => m.TablesModule)
  },
  {
    path: 'settings', loadChildren:
      () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
  },
  {path: 'card-or-list', component: CardOrListViewExampleComponent},
  {path: 'file', component: FileComponent},
  {path: 'map', component: MapExampleComponent}
  // {path: 'testlist', component: TestListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
    // scrollOffset: [0, 64] // [x, y]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
