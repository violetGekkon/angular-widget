import {
  Component,
  ComponentFactoryResolver,
  Injector,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';
import { DashboardCard } from '../model/dashboard-card.model';

@Component({
  selector: 'app-dashboard-card-spawner',
  templateUrl: './dashboard-card-spawner.component.html',
  styles: [':host { height: 100%; width: 100%;}'],
})
export class DashboardCardSpawnerComponent implements OnInit {
  @ViewChild('spawn', { read: ViewContainerRef, static: true }) container: ViewContainerRef | undefined;

  constructor(private resolver: ComponentFactoryResolver) {}

  @Input() set card(data: DashboardCard) {
    if (!data) {
      return;
    }

    const componentFactory = this.resolver.resolveComponentFactory(
      data.component
    );

    const inputProviders = Object.keys(data.inputs).map((inputName) => {
      return {
        provide: data.inputs[inputName].key,
        useValue: data.inputs[inputName].value,
        deps: [],
      };
    });
    // inputProviders = inputProviders.concat(data.services);

    const injector = Injector.create({ providers: inputProviders });

    const component = componentFactory.create(injector);
    this.container?.insert(component.hostView);
  }

  ngOnInit() {}
}
