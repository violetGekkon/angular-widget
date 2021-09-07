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
import {CanActivateParticipantListGuardService} from './services/can-activate-participant-list-guard.service';
import {MarketParticipantsFacade} from './market-participants.facade';
import {TemporaryStorageService} from './services/temporary-storage.service';
import {CanDeactivateParticipantItemGuardService} from './services/can-deactivate-participant-item-guard.service';
import {CanDeactivateParticipantListGuardService} from './services/can-deactivate-participant-list-guard.service';
import {CanActivateParticipantItemGuardService} from './services/can-activate-participant-item-guard.service';

export const routes: Route[] = [
  {
    path: '',
    component: MarketParticipantsComponent,
    canActivate: [CanActivateParticipantListGuardService],
    canDeactivate: [CanDeactivateParticipantListGuardService]
  },
  {
    path: ':marketParticipantUrl',
    component: MarketParticipantDetailComponent,
    canActivate: [CanActivateParticipantItemGuardService],
    canDeactivate: [CanDeactivateParticipantItemGuardService]
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
    CanActivateParticipantListGuardService,
    CanActivateParticipantItemGuardService,
    CanDeactivateParticipantItemGuardService,
    CanDeactivateParticipantListGuardService
  ]
})
export class MarketParticipantsModule {
}
