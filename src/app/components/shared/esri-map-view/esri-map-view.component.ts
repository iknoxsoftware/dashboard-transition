import { Component, OnInit, Input, Output, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { EsriMapComponent } from "angular-esri-components";
import { EsriLoaderService } from "angular-esri-loader";

@Component({
    selector: 'esri-map-view',
    templateUrl: './esri-map-view.component.html',
    styleUrls: ['./esri-map-view.component.sass']
})
export class EsriMapViewComponent implements OnInit {
mapProperties: __esri.MapProperties = {
    basemap: 'satellite'
};
mapViewProperties: __esri.MapViewProperties = {
    center: [-96.93, 35.59],
    zoom: 4
};
map: __esri.Map;
mapView: __esri.MapView;

@ViewChild(EsriMapComponent) esriComponent: EsriMapComponent;

    constructor(private esriLoader: EsriLoaderService) { }

    ngOnInit() { }

    onMapInit(mapInfo: {map: __esri.Map, mapView: __esri.MapView}) {
    this.map = mapInfo.map;
    this.mapView = mapInfo.mapView;
    }
}