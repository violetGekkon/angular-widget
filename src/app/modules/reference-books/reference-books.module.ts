import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministartionComponent } from './components/administartion/administartion.component';
import { AdministrationComponent } from './components/administration/administration.component';

@NgModule({
  declarations: [AdministartionComponent, AdministrationComponent],
  imports: [
    CommonModule
  ]
})
export class ReferenceBooksModule { }
