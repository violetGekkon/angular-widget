import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { SettingsPageComponent } from './settings-page/settings-page.component';

@NgModule({
  declarations: [SettingsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: SettingsPageComponent}
    ])
  ]

})
export class SettingsModule { }
