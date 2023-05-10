import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RsaPageComponent } from './components/rsa-page/rsa-page.component';
import { DashboardComponent } from './components/card/dashboard/dashboard.component';
import { MapExampleComponent } from './map-example/map-example.component';
import { TableComponent } from './table-page/table.component';
import { FileComponent } from './file/file.component';
import { CardOrListViewExampleComponent } from './components/card-or-list-view-example/card-or-list-view-example.component';
import { ProductListComponent } from './modules/product/components/product-list/product-list.component';
import { ProductDetailsComponent } from './modules/product/components/product-details/product-details.component';
import { OverviewComponent } from './modules/product/components/overview/overview.component';
import { SpecsComponent } from './modules/product/components/specs/specs.component';
import { GridsterLayoutComponent } from './components/gridster-layout/gridster-layout.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  { path: 'rsa', component: RsaPageComponent },
  { path: 'table', component: TableComponent },
  { path: 'product-list', component: ProductListComponent },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'specs', component: SpecsComponent },
    ],
  },
  {
    path: 'issuance',
    loadChildren: () =>
      import('./modules/barcode-issuance/barcode-issuance.module').then(
        (m) => m.BarcodeIssuanceModule
      ),
  },
  {
    path: 'flowers',
    loadChildren: () =>
      import('./modules/market-participants/flowers.module').then(
        (m) => m.FlowersModule
      ),
  },
  {
    path: 'animations',
    loadChildren: () =>
      import('./modules/animations/animations.module').then(
        (m) => m.AnimationsModule
      ),
  },
  {
    path: 'generic-mat-table',
    loadChildren: () =>
      import('./modules/table/tables.module').then((m) => m.TablesModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./modules/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
  },
  {
    path: 'frap',
    loadChildren: () =>
      import('./modules/reference-books/reference-books.module').then(
        (m) => m.ReferenceBooksModule
      ),
  },
  {
    // The option type: 'manifest' makes loadRemoteModule to look up the key data needed in the loaded manifest.
    // The property remoteName points to the key that was used in the manifest.
    path: 'utm',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfe1',
        exposedModule: './Module',
      }).then((m) => m.MfeTestModule),
  },
  { path: 'card-or-list', component: CardOrListViewExampleComponent },
  { path: 'file', component: FileComponent },
  { path: 'map', component: MapExampleComponent },
  { path: '**', component: GridsterLayoutComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      // scrollOffset: [0, 64] // [x, y]
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
