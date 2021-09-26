import {AfterViewInit, Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ReferenceBookDefinition} from '../../interfaces/reference-book.interface';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit, AfterViewInit {

  @Input() tableDef: ReferenceBookDefinition;
  @ViewChild('table', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

        const { type: componentType } = this.tableDef;
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        this.container.clear();
        const componentRef = this.container.createComponent(
          componentFactory
        );
        componentRef.instance.dataSource = this.tableDef.data;

  }

}
