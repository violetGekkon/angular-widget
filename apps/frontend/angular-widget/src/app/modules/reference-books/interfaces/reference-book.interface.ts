import { Type } from '@angular/core';
import { InjectableTableComponent } from '../models/injectable-table-component.model';

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
