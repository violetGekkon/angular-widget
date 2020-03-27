import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ManeNavComponent} from './mane-nav/mane-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardCardSpawnerComponent} from './card/dashboard-card-spawner/dashboard-card-spawner.component';
import {RsaPageComponent} from './rsa-page/rsa-page.component';
import {ViewTableCardComponent} from './card/view-table-card/view-table-card.component';
import {WeatherService} from './services/weather.service';
import {HttpClientModule} from '@angular/common/http';
import {MapExampleComponent} from './map-example/map-example.component';
import {SubdivisionComponent} from './subdivision/subdivision.component';
import {CertificateRsaApplicationComponent} from './certificate-rsa-application/certificate-rsa-application.component';
import {TestListComponent} from './test-list/test-list.component';
import {NavListComponent} from './nav-list/nav-list.component';
import {TableComponent} from './settings-page/table.component';
import {SlidePanelComponent} from './slide-panel/slide-panel.component';
import {DataService} from './data.service';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {FileComponent} from './file/file.component';
import {AppTooltipComponent} from './ui/tooltips/app-tooltip/app-tooltip.component';
import {AppTooltipDirective} from './ui/tooltips/app-tooltip/app-tooltip.directive';
import {OverlayModule} from '@angular/cdk/overlay';
import {NgLoopDirective} from './ui/directives/ng-loop.directive';
import {SharedModule} from './ui/shared/shared.module';
import {CardOrListViewExampleComponent} from './components/card-or-list-view-example/card-or-list-view-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ManeNavComponent,
    DashboardComponent,
    DashboardCardSpawnerComponent,
    RsaPageComponent,
    ViewTableCardComponent,
    MapExampleComponent,
    SubdivisionComponent,
    CertificateRsaApplicationComponent,
    TestListComponent,
    NavListComponent,
    TableComponent,
    SlidePanelComponent,
    BreadcrumbComponent,
    FileComponent,
    AppTooltipComponent,
    AppTooltipDirective,
    // DocumentChartComponent,
    NgLoopDirective,
    CardOrListViewExampleComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    OverlayModule,
    SharedModule
    // NvD3Module
  ],
  providers: [WeatherService, DataService],
  bootstrap: [AppComponent],
  entryComponents: [AppTooltipComponent],
})
export class AppModule {
}
