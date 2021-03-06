import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TestPageComponent} from './test-page/test-page.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AnotherTestPageComponent} from './another-test-page/another-test-page.component';
import {SettingsPageComponent} from './settings-page/settings-page.component';
import {FileComponent} from './file/file.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, pathMatch: 'full'},
  {path: 'test', component: TestPageComponent},
  {path: 'settings', component: SettingsPageComponent},
  {path: 'test1', component: AnotherTestPageComponent},
  {path: 'file', component: FileComponent}
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
