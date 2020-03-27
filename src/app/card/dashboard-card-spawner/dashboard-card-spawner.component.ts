import {Component, ComponentFactoryResolver, Injector, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DashboardCard} from '../model/dashboard-card.model';

@Component({
  selector: 'app-dashboard-card-spawner',
  templateUrl: './dashboard-card-spawner.component.html',
  styles: [':host { height: 100%; width: 100%;}']
})
export class DashboardCardSpawnerComponent implements OnInit {

  @ViewChild('spawn', {read: ViewContainerRef, static: false}) container;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  @Input() set card(data: DashboardCard) {
    if (!data) {
      return;
    }

    const inputProviders = Object.keys(data.inputs).map((inputName) => {
      return {
        provide: data.inputs[inputName].key,
        useValue: data.inputs[inputName].value,
        deps: []
      };
    });
    // inputProviders = inputProviders.concat(data.services);

    const injector = Injector.create(inputProviders, this.container.parentInjector);
    const factory = this.resolver.resolveComponentFactory(data.components);
    const component = factory.create(injector);
    this.container.insert(component.hostView);
  }

  ngOnInit() {
  }

}
