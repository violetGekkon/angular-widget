import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MarketParticipantsComponent} from './components/market-participants/market-participants.component';
import {MaterialModule} from '../../material.module';
import {MarketParticipantHttpService} from './services/market-participant-http.service';
import {MarketParticipantDetailComponent} from './components/market-participant-detail/market-participant-detail.component';
import {CommonModule} from '@angular/common';
import {TableComponent} from './components/table/table.component';
import {StatisticComponent} from './components/statistic/statistic.component';
import {FlexModule} from '@angular/flex-layout';

import {FiltersComponent} from './components/filters/filters.component';

export const routes = [
  {
    path: '',
    component: MarketParticipantsComponent
  },
  {
    path: ':marketParticipantUrl',
    component: MarketParticipantDetailComponent
  }
];

@NgModule({
  declarations: [
    MarketParticipantsComponent,
    MarketParticipantDetailComponent,
    TableComponent,
    StatisticComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexModule
  ],
  exports: [
    RouterModule
  ],
  providers: [MarketParticipantHttpService]
})
export class MarketParticipantsModule {
}
