import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TestPageComponent} from './test-page/test-page.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AnotherTestPageComponent} from './another-test-page/another-test-page.component';
import {SettingsPageComponent} from './settings-page/settings-page.component';
import {FileComponent} from './file/file.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, pathMatch: 'full'},
  {path: 'rsa', component: TestPageComponent},
  // {path: 'settings', component: SettingsPageComponent},
  {
    path: 'settings', loadChildren:
      () => import('./modules/setting-page/settings.module').then(m => m.SettingsModule)
  },
  {path: 'test1', component: AnotherTestPageComponent},
  {path: 'file', component: FileComponent}
  {path: 'map', component: AnotherTestPageComponent}
  // {path: 'testlist', component: TestListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
    // scrollOffset: [0, 64] // [x, y]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
