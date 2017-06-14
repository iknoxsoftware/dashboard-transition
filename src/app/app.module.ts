import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PanelBarModule } from '@progress/kendo-angular-layout';

import { RoutingData } from './models/routing.model';

import { MenuService } from './services/menu.service';
import { EventService } from './services/event.service';
import { WidgetSettingsService } from "app/services/widget-settings.service";

import { PageComponent } from './components/page/page.component';
import { MenuComponent } from './components/page/menu/menu.component';
import { MenuHeaderBarComponent } from './components/page/menu/menu-header-bar/menu-header-bar.component';
import { MenuItemBarComponent } from './components/page/menu/menu-item-bar/menu-item-bar.component';
import { MenuItemComponent } from './components/page/menu/menu-item-bar/menu-item/menu-item.component';
import { MenuClassificationBarComponent } from './components/page/menu/menu-classification-bar/menu-classification-bar.component';

import { WidgetHeaderComponent } from './components/shared/widget-header/widget-header.component';
import { WidgetSettingsComponent } from './components/shared/widget-settings/widget-settings.component';

import { IronTrackerComponent } from './components/widgets/iron-tracker/iron-tracker.component';
import { IronTrackerContentComponent } from './components/widgets/iron-tracker/iron-tracker-content/iron-tracker-content.component';
import { PivotViewerComponent } from './components/widgets/pivot-viewer/pivot-viewer.component';
import { MaasComponent } from './components/widgets/maas/maas.component';
import { BusyBoxComponent } from './components/page/busy-box/busy-box.component';
import { WidgetHeaderItemComponent } from './components/shared/widget-header/widget-header-item/widget-header-item.component';
import { WidgetSettingsMenuComponent } from './components/shared/widget-settings/widget-settings-menu/widget-settings-menu.component';
import { WidgetSettingsItemComponent } from "app/components/shared/widget-settings/widget-settings-menu/widget-settings-item/widget-settings-item.component";
import { MaasContentComponent } from './components/widgets/maas/maas-content/maas-content.component';
import { PivotViewerContentComponent } from './components/widgets/pivot-viewer/pivot-viewer-content/pivot-viewer-content.component';
// import { EsriMapComponent } from "./components/shared/esri-map/esri-map.component";
// import { EsriMapMapComponent } from './components/shared/esri-map/esri-map-map/esri-map-map.component';
// import { EsriSearchComponent } from "./components/shared/esri-map/esri-map-map/esri-search/esri-search.component";

import { EsriMapViewComponent } from "./components/shared/esri-map-view/esri-map-view.component";
import { AngularEsriModule } from 'angular-esri-components';
import { PivotViewerViewComponent } from './components/shared/pivot-viewer-view/pivot-viewer-view.component';

// Grid and Chart components
import {AgGridModule} from 'ag-grid-angular/main';
import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';
import {ChartModule} from 'angular2-highcharts';

// Import MAAS Components
import {MaasBarChart} from 'app/components/widgets/maas/maas-content/maas/maas-bar-chart/maas-bar-chart-renderer';

// MaasGridRenderer
import {MaasGridComponent} from "app/components/widgets/maas/maas-content/maas/maas-grid-renderer/maas-grid-renderer.component";
import {MaasGroupRenderer} from "app/components/widgets/maas/maas-content/maas/maas-grid-renderer/maas-group-renderer.component";
//GroupReadinessRenderer
import {GroupReadinessRenderer} from "app/components/widgets/maas/maas-content/maas/maas-grid-renderer/group-readiness-renderer/group-readiness-renderer.component";
//RatingCellRenderer
import {RatingCellRendererComponent} from 'app/components/widgets/maas/maas-content/maas/maas-grid-renderer/rating-cell-renderer/rating-cell-renderer.component';

// Services
import {WebApiObjectFactoryService} from 'app/components/widgets/maas/maas-content/maas/services/web-api-object-factory.service';

export function highchartsFactory() {
  return require('highcharts');
}

@NgModule({
    declarations: [
        MenuComponent,
        MenuHeaderBarComponent,
        MenuItemBarComponent,
        MenuItemComponent,
        MenuClassificationBarComponent,
        PageComponent,
        IronTrackerComponent,
        IronTrackerContentComponent,
        PivotViewerComponent,
        MaasComponent,
        BusyBoxComponent,
        WidgetHeaderComponent,
        WidgetHeaderItemComponent,
        WidgetSettingsComponent,
        WidgetSettingsItemComponent,
        WidgetSettingsMenuComponent,
        MaasContentComponent,
        PivotViewerContentComponent,
        // EsriMapComponent,
        // EsriSearchComponent,
        // EsriMapMapComponent,
        EsriMapViewComponent,
        PivotViewerViewComponent,
        MaasBarChart,
        MaasGridComponent,
        MaasGroupRenderer,
        RatingCellRendererComponent,
        GroupReadinessRenderer
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule, 
        PanelBarModule,
        FormsModule,
        HttpModule,
        RoutingData,
        AngularEsriModule,
        AgGridModule.withComponents(
        [
            RatingCellRendererComponent,
            GroupReadinessRenderer
        ]),
        ChartModule
    ],
    providers: [
        MenuService, 
        EventService, 
        WidgetSettingsService,
        WebApiObjectFactoryService,
            {
                provide: HighchartsStatic,
                useFactory: highchartsFactory
            }
    ],
    bootstrap: [PageComponent]
})
export class AppModule { }
