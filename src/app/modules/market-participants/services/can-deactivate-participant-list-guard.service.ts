import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {MarketParticipantsFacade} from '../market-participants.facade';
import {CanComponentDeactivate} from '../interfaces/can-component-deactivate.interface';

@Injectable()
export class CanDeactivateParticipantListGuardService implements CanDeactivate<CanComponentDeactivate> {

  constructor(private facade: MarketParticipantsFacade) {
  }

  canDeactivate(component: CanComponentDeactivate,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): boolean {

    console.log('ListGuardService');
    console.log(nextState.url);
    // Если следующий переход в другой модуль, нужно очистить sessionStorage
    if (nextState && !nextState.url.includes('market-participants')) {
      this.facade.clearTmpStorage();
    }
    return true;
  }


}
