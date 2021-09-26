import {Type} from '@angular/core';

export interface Link {
  id?: number;
  title: string;
  url: string;
}

export interface ReferenceBookDefinition {
  type: Type<InjectableTableComponent>;
  data: ReferenceBook[];
}

export interface ReferenceBook {
  id?: number;
  code?: string;
}

export interface Capacity extends ReferenceBook {
  capacity: string;
}

export class InjectableTableComponent {
  dataSource: ReferenceBook[];
}
