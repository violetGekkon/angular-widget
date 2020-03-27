import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RsaPageComponent} from './rsa-page/rsa-page.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MapExampleComponent} from './map-example/map-example.component';
import {TableComponent} from './settings-page/table.component';
import {FileComponent} from './file/file.component';
import {CardOrListViewExampleComponent} from './components/card-or-list-view-example/card-or-list-view-example.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, pathMatch: 'full'},
  {path: 'rsa', component: RsaPageComponent},
  {path: 'settings', component: TableComponent},
  {
    path: 'issuance', loadChildren:
      () => import('./modules/barcode-issuance/barcode-issuance.module').then(m => m.BarcodeIssuanceModule)
  },
  {
    path: 'issuance', loadChildren:
      () => import('./modules/barcode-issuance/barcode-issuance.module').then(m => m.BarcodeIssuanceModule)
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
