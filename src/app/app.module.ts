import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ManeNavComponent} from './mane-nav/mane-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatExpansionModule,
  MatGridListModule,
  MatCardModule,
  MatSelectModule,
  MatCheckboxModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';

import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardCardSpawnerComponent} from './card/dashboard-card-spawner/dashboard-card-spawner.component';
import {TestPageComponent} from './test-page/test-page.component';
import {ViewTableCardComponent} from './card/view-table-card/view-table-card.component';
import {WeatherService} from './services/weather.service';
import {HttpClientModule} from '@angular/common/http';
import {AnotherTestPageComponent} from './another-test-page/another-test-page.component';
import { SubdivisionComponent } from './subdivision/subdivision.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CertificateRsaApplicationComponent } from './certificate-rsa-application/certificate-rsa-application.component';
import { TestListComponent } from './test-list/test-list.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { SlidePanelComponent } from './slide-panel/slide-panel.component';
import {DataService} from './data.service';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FileComponent } from './file/file.component';
import { AppTooltipComponent } from './tooltips/app-tooltip/app-tooltip.component';
import {AppTooltipDirective} from './tooltips/app-tooltip/app-tooltip.directive';
import {OverlayModule} from '@angular/cdk/overlay';
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';
import { DocumentChartComponent } from './card/document-chart/document-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ManeNavComponent,
    DashboardComponent,
    DashboardCardSpawnerComponent,
    TestPageComponent,
    ViewTableCardComponent,
    AnotherTestPageComponent,
    SubdivisionComponent,
    CertificateRsaApplicationComponent,
    TestListComponent,
    NavListComponent,
    SettingsPageComponent,
    SlidePanelComponent,
    BreadcrumbComponent,
    FileComponent,
    AppTooltipComponent,
    AppTooltipDirective,
    DocumentChartComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DragDropModule,
    LayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatStepperModule,
    MatGridListModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    FlexLayoutModule,
    OverlayModule,
    NvD3Module
  ],
  providers: [WeatherService, DataService],
  bootstrap: [AppComponent],
  entryComponents: [AppTooltipComponent],
})
export class AppModule {
}
