import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {NavigationService} from '../../../services/navigation.service';
import {MarketParticipantsFacade} from '../market-participants.facade';

@Injectable()
export class CanActivateParticipantListGuardService implements CanActivate {

  private previousUrl: string | null;

  constructor(private _router: Router,
              private navigationService: NavigationService,
              private facade: MarketParticipantsFacade) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {

    this.previousUrl = this.navigationService.history.length !== 0 ? this.navigationService.history.slice(-1)[0] : null;
    // Если какая-то история переходов есть, проверяем, с какого роута переход
    // Если из другого модуля, то запрашиваем данные из sessionStorage и если они есть, то перенаправляем на организацию
    if (this.previousUrl && !this.previousUrl.includes('market-participants')) {
      console.log('another route');
      const organizationUrl = this.facade.getOrgUrlFromStorage();
      if (organizationUrl) {
        this._router.navigate([organizationUrl])
          .then(result => {
            console.log(result);
          })
          .catch(error => console.log(`Navigation fails`, error));
        return false;
      }
    }

    return true;

  }
}
