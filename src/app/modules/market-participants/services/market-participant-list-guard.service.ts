import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {NavigationService} from '../../../services/navigation.service';

@Injectable()
export class MarketParticipantListGuardService implements CanActivate {

  private previousUrl: string | null;

  constructor(private _router: Router, private navigationService: NavigationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {

    console.log(this.navigationService.history);
    this.previousUrl = this.navigationService.history.length !== 0 ? this.navigationService.history.slice(-1)[0] : null;
    console.log(this.previousUrl);
    // Если история пустая
    if (!this.previousUrl) {
      // Проверяем текущий url и если это url организации, то запрос на возврат к списку
      if (state.url.includes('market-participants/')) {
        console.log('history empty');
        console.log('from detail');
        console.log('need to backUp list');
      }
    } else {
      // Если какая-то история переходов есть, проверяем, с какого роута переход
      // Если из организации, то возврат к списку
      if (this.previousUrl.includes('market-participants')) {
        console.log('from detail');
        console.log('need to backUp list');
        return true;
      } else { // Если из другого модуля, то запрашиваем данные из sessionStorage и если они есть, то перенаправляем на организацию
        console.log('another route');
        // Если в истории сохранился url
        // Url должен удаляться по истечении 10 минут
        if (sessionStorage.hasOwnProperty('orgUrlForBackUp')) {
          this._router.navigate([sessionStorage.getItem('orgUrlForBackUp')]);
          return false;
        }
      }
    }
    return true;
  }

}
