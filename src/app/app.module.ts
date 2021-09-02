import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ManeNavComponent} from './mane-nav/mane-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './components/card/dashboard/dashboard.component';
import {DashboardCardSpawnerComponent} from './components/card/dashboard-card-spawner/dashboard-card-spawner.component';
import {RsaPageComponent} from './components/rsa-page/rsa-page.component';
import {ViewTableCardComponent} from './components/card/view-table-card/view-table-card.component';
import {WeatherService} from './services/weather.service';
import {HttpClientModule} from '@angular/common/http';
import {MapExampleComponent} from './map-example/map-example.component';
import {SubdivisionComponent} from './subdivision/subdivision.component';
import {CertificateRsaApplicationComponent} from './components/certificate-rsa-application/certificate-rsa-application.component';
import {TestListComponent} from './test-list/test-list.component';
import {NavListComponent} from './nav-list/nav-list.component';
import {TableComponent} from './table-page/table.component';
import {SlidePanelComponent} from './slide-panel/slide-panel.component';
import {DataService} from './data.service';
import {BreadcrumbComponent} from './ui/components/breadcrumb/breadcrumb.component';
import {FileComponent} from './file/file.component';
import {AppTooltipComponent} from './ui/tooltips/app-tooltip/app-tooltip.component';
import {AppTooltipDirective} from './ui/tooltips/app-tooltip/app-tooltip.directive';
import {OverlayModule} from '@angular/cdk/overlay';
import {NgLoopDirective} from './ui/directives/ng-loop.directive';
import {SharedModule} from './ui/shared/shared.module';
import {CardOrListViewExampleComponent} from './components/card-or-list-view-example/card-or-list-view-example.component';
import {DocumentChartComponent} from './components/card/document-chart/document-chart.component';

import {ScrollDirectionDirective} from './ui/directives/scroll-direction.directive';
import {ProductListComponent} from './modules/product/components/product-list/product-list.component';
import {ProductDetailsComponent} from './modules/product/components/product-details/product-details.component';
import {OverviewComponent} from './modules/product/components/overview/overview.component';
import {SpecsComponent} from './modules/product/components/specs/specs.component';
import {GridsterLayoutComponent} from './components/gridster-layout/gridster-layout.component';
import {GridsterModule} from 'angular-gridster2';
import {GridsterLayoutService} from './services/gridster-layout.service';
import {GridsterLayoutItemDirective} from './directives/gridster-layout-item.directive';
import {NavigationService} from './services/navigation.service';

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
    DocumentChartComponent,
    NgLoopDirective,
    CardOrListViewExampleComponent,
    ProductListComponent,
    ProductDetailsComponent,
    OverviewComponent,
    SpecsComponent,
    ScrollDirectionDirective,
    GridsterLayoutComponent,
    GridsterLayoutItemDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    OverlayModule,
    SharedModule,
    GridsterModule
  ],
  providers: [WeatherService, DataService, GridsterLayoutService, NavigationService],
  bootstrap: [AppComponent],
  entryComponents: [AppTooltipComponent, DocumentChartComponent, ViewTableCardComponent],
})
export class AppModule {
}
