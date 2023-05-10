import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  SettingsItem,
  SettingsItemComponent,
} from '../settings-item/settings-item.component';
import { ScrollWatcherService } from '../../../../services/scroll-watcher.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent implements OnInit, AfterViewInit {
  activeIndex: number | null = null;

  settingsList = [
    {
      title: 'Настройки УТМ',
      fragment: 'utm',
    },
    {
      title: 'IP-фильтр',
      fragment: 'ipfilter',
    },
    {
      title: 'XML схемы',
      fragment: 'xsd',
    },
    {
      title: 'Сертификаты',
      fragment: 'certificates',
    },
  ];

  settingItems: SettingsItem[] = [
    { id: 'utm', header: 'Настройки УТМ' },
    { id: 'ipfilter', header: 'Фильтр IP-адресов' },
    { id: 'xsd', header: 'XML cхемы' },
    { id: 'certificates', header: 'Сертификаты' },
  ];

  @ViewChildren('settingsContainer', { read: ElementRef })
  settingsContainers: QueryList<ElementRef>;

  constructor(private scrollWatcherService: ScrollWatcherService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.settingsContainers.forEach((elem) =>
      console.log(elem.nativeElement.getBoundingClientRect().top)
    );
  }
}
