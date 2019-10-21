import {Component, OnInit} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-another-test-page',
  templateUrl: './another-test-page.component.html',
  styleUrls: ['./another-test-page.component.scss']
})

export class AnotherTestPageComponent implements OnInit {

  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';


  items = [
    {'link': '/testlist', 'title': 'Глава 3', 'fragment': 'bar-3'},
    {'link': '/testlist', 'title': 'Глава 4', 'fragment': 'bar-4'},
    {'link': '/testlist', 'title': 'Глава 5', 'fragment': 'bar-5'}
  ];

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  theme = 'egais-lite-theme';

  selected = 'option2';

  constructor(private overlayContainer: OverlayContainer) {
  }

  ngOnInit() {
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }

  onThemeChange() {
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }


}
