import {Component, Input, OnInit} from '@angular/core';

export interface SettingsItem {
  id: string;
  header: string;
}

@Component({
  selector: 'app-settings-item',
  templateUrl: './settings-item.component.html',
  styleUrls: ['./settings-item.component.scss']
})
export class SettingsItemComponent {

  @Input() settingsItem: SettingsItem;

}
