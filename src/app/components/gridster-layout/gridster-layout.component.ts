import {Component, OnInit} from '@angular/core';
import {GridsterConfig, GridsterItem} from 'angular-gridster2';
import {GridsterLayoutService, IComponent} from '../../services/gridster-layout.service';

@Component({
  selector: 'app-gridster-layout',
  templateUrl: './gridster-layout.component.html',
  styleUrls: ['./gridster-layout.component.scss']
})
export class GridsterLayoutComponent implements OnInit {

  get options(): GridsterConfig {
    return this.layoutService.options;
  }

  get layout(): GridsterItem[] {
    return this.layoutService.layout;
  }

  get components(): IComponent[] {
    return this.layoutService.components;
  }

  constructor(private layoutService: GridsterLayoutService) {
  }

  ngOnInit(): void {
    [1, 2, 3, 4].forEach(_ => this.layoutService.addItem());
  }

  dropItem(name: string) {
    this.layoutService.dropItem(name);
  }

  setDropId(id: string) {
    this.layoutService.setDropId(id);
  }

}
