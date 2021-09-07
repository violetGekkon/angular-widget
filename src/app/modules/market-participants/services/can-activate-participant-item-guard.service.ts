import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {NavigationService} from '../../../services/navigation.service';
import {MarketParticipantsFacade} from '../market-participants.facade';

@Injectable()
export class CanActivateParticipantItemGuardService implements CanActivate {

  private previousUrl: string | null;

  constructor(private _router: Router,
              private navigationService: NavigationService,
              private facade: MarketParticipantsFacade) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {

    console.log('CanActivateParticipantItemGuardService');
    console.log('state', state);
    console.log('ActivatedRouteSnapshot', route);

    this.previousUrl = this.navigationService.history.length !== 0 ? this.navigationService.history.slice(-1)[0] : null;
    console.log('this.previousUrl', this.previousUrl);
    // Если какая-то история переходов есть, проверяем, с какого роута переход
    // Если из другого модуля, то нужно остановить таймер, по которому очистится sessionStorage
    if (this.previousUrl && !this.previousUrl.includes('market-participants')) {
      console.log('another route');
      this.facade.stopTimer();
    }

    return true;

  }
}
