import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../ui/shared/shared.module';
import { ReferenceBooksListComponent } from './layouts/reference-books-list/reference-books-list.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { ReferenceBooksLayoutComponent } from './layouts/reference-books-layout/reference-books-layout.component';
import { ReferenceBooksAdministrationComponent } from './components/reference-books-administration/reference-books-administration.component';
import { ReferenceBookControlComponent } from './components/reference-book-control/reference-book-control.component';
import { ReferenceBooksRoutingModule } from './reference-books-routing.module';
import { ReferenceBookResolver } from './services/reference-book.resolver';
import { ReferenceBooksHttpService } from './services/reference-books-http.service';
import { CapacityReferenceBookComponent } from './components/tables/capacity-reference-book/capacity-reference-book.component';

@NgModule({
  declarations: [
    ReferenceBooksListComponent,
    DynamicTableComponent,
    ReferenceBooksLayoutComponent,
    ReferenceBooksAdministrationComponent,
    ReferenceBookControlComponent,
    CapacityReferenceBookComponent,
  ],
  imports: [CommonModule, SharedModule, ReferenceBooksRoutingModule],
  providers: [ReferenceBookResolver, ReferenceBooksHttpService],
})
export class ReferenceBooksModule {}
