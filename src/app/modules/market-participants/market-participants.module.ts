import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {MarketParticipantsComponent} from './components/market-participants/market-participants.component';
import {MaterialModule} from '../../material.module';
import {MarketParticipantHttpService} from './services/market-participant-http.service';
import {MarketParticipantDetailComponent} from './components/market-participant-detail/market-participant-detail.component';
import {CommonModule} from '@angular/common';
import {TableComponent} from './components/table/table.component';
import {StatisticComponent} from './components/statistic/statistic.component';
import {FlexModule} from '@angular/flex-layout';

import {FiltersComponent} from './components/filters/filters.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CanActivateGuardService} from './services/can-activate-guard.service';
import {MarketParticipantsFacade} from './market-participants.facade';
import {TemporaryStorageService} from './services/temporary-storage.service';

export const routes: Route[] = [
  {
    path: '',
    component: MarketParticipantsComponent,
    canActivate: [CanActivateGuardService],
    canDeactivate: []
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
    FlexModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MarketParticipantHttpService,
    MarketParticipantsFacade,
    TemporaryStorageService,
    CanActivateGuardService
  ]
})
export class MarketParticipantsModule {
}
