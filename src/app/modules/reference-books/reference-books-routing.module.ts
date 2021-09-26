import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReferenceBookResolver} from './services/reference-book.resolver';
import {ReferenceBooksLayoutComponent} from './layouts/reference-books-layout/reference-books-layout.component';
import {ReferenceBooksAdministrationComponent} from './components/reference-books-administration/reference-books-administration.component';
import {ReferenceBookControlComponent} from './components/reference-book-control/reference-book-control.component';

const routes: Routes = [
  {path: '', redirectTo: 'adm', pathMatch: 'full'},
  {
    path: 'adm',
    component: ReferenceBooksLayoutComponent,
    children: [
      {
        path: '',
        component: ReferenceBooksAdministrationComponent,
      },
      {
        path: ':referenceBookUrl',
        component: ReferenceBookControlComponent,
        resolve: {
          referenceBookDef: ReferenceBookResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferenceBooksRoutingModule {
}
