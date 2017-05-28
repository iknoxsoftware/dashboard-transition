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
        EsriMapViewComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule, 
        PanelBarModule,
        FormsModule,
        HttpModule,
        RoutingData,
        AngularEsriModule
    ],
    providers: [
        MenuService, 
        EventService, 
        WidgetSettingsService
    ],
    bootstrap: [PageComponent]
})
export class AppModule { }
