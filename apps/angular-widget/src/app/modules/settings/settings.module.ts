import { NgModule } from '@angular/core';
import { SharedModule } from '../../ui/shared/shared.module';
import { RouterModule } from '@angular/router';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { SettingsItemComponent } from './components/settings-item/settings-item.component';

@NgModule({
  declarations: [SettingsPageComponent, SettingsItemComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: SettingsPageComponent }]),
  ],
})
export class SettingsModule {}
