import {ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, ViewContainerRef} from '@angular/core';
import {DocumentChartComponent} from '../components/card/document-chart/document-chart.component';
import {ViewTableCardComponent} from '../components/card/view-table-card/view-table-card.component';

const components = {
  example1: DocumentChartComponent,
  example2: ViewTableCardComponent
};

@Directive({
  selector: '[appGridsterLayoutItem]'
})
export class GridsterLayoutItemDirective implements OnChanges {

  @Input() componentRef: string;
  component: ComponentRef<any>;

  constructor(private container: ViewContainerRef,
              private resolver: ComponentFactoryResolver) {
  }

  ngOnChanges(changes) {
    const component = components[this.componentRef];

    if (component) {
      const factory = this.resolver.resolveComponentFactory<any>(component);
      this.component = this.container.createComponent(factory);
    }
  }

}
