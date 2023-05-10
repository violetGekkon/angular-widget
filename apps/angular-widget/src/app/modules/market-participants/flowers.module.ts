import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FlowersListComponent } from './components/flowers-list/flowers-list.component';
import { MaterialModule } from '../../material.module';
import { FlowersHttpService } from './services/flowers-http.service';
import { FlowerDetailComponent } from './components/flower-detail/flower-detail.component';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { FlexModule } from '@angular/flex-layout';

import { FiltersComponent } from './components/filters/filters.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlowersFacade } from './flowers-facade.service';
import { TemporaryStorageService } from './services/temporary-storage.service';

export const routes: Route[] = [
  {
    path: '',
    component: FlowersListComponent,
  },
  {
    path: ':id',
    component: FlowerDetailComponent,
  },
];

@NgModule({
  declarations: [
    FlowersListComponent,
    FlowerDetailComponent,
    TableComponent,
    StatisticComponent,
    FiltersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  providers: [FlowersHttpService, FlowersFacade, TemporaryStorageService],
})
export class FlowersModule {}
