import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {MarketParticipantsFacade} from '../market-participants.facade';
import {CanComponentDeactivate} from '../interfaces/can-component-deactivate.interface';

@Injectable()
export class CanDeactivateParticipantItemGuardService implements CanDeactivate<CanComponentDeactivate> {

  constructor(private facade: MarketParticipantsFacade) {
  }

  canDeactivate(component: CanComponentDeactivate,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): boolean {

    // Если следующий переход в другой модуль, нужно добавить url в sessionStorage и запустить таймер на очистку sessionStorage
    if (nextState && !nextState.url.includes('market-participants')) {
      this.facade.saveOrgUrlToStorage(state.url);
      this.facade.startTimer();
    }
    return true;
  }


}
