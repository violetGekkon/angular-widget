import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DatePickerComponent } from '../components/date-picker/date-picker.component';
import { CardItemDirective } from '../directives/card-item.directive';
import { ListItemDirective } from '../directives/list-item.directive';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CardOrListViewComponent } from '../components/card-or-list-view/card-or-list-view.component';

@NgModule({
  declarations: [
    DatePickerComponent,
    CardItemDirective,
    ListItemDirective,
    CardOrListViewComponent,
  ],
  imports: [CommonModule, FormsModule, MaterialModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    DragDropModule,
    DatePickerComponent,
    CardItemDirective,
    ListItemDirective,
    CardOrListViewComponent,
  ],
})
export class SharedModule {}
