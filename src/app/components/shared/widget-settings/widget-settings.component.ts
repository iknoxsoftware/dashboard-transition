import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { SettingsMenuModel, SettingsMenuID, SettingsSelectionModel } from "app/models/widget-settings.model";
import { WidgetSettingsService } from "app/services/widget-settings.service";
import { PanelBarExpandMode } from "@progress/kendo-angular-layout/dist/es/main";
import { EventService } from "app/services/event.service";
import { WidgetID } from "app/models/widget.model";

@Component({
    selector: 'widget-settings',
    templateUrl: './widget-settings.component.html',
    styleUrls: ['./widget-settings.component.sass']
})
export class WidgetSettingsComponent implements OnInit, AfterViewInit {
@Input() widgetID: WidgetID;
@Input() menuIDs: Array<SettingsMenuID>;
expandMode: number = PanelBarExpandMode.Multiple;
menuItems: Array<SettingsMenuModel>;

    constructor(private _widgetSettingsService: WidgetSettingsService, private _eventService: EventService) { }

    ngOnInit() {
        this.menuItems = this._widgetSettingsService.getMenuItems(this.menuIDs);
    }

    ngAfterViewInit() {
        this.onSettingsApplied(null);
    }

    onSettingsApplied(event) {
        console.log('onSettingsApplied');
        let menuItems = this.menuItems.slice();
        let selections = new SettingsSelectionModel(this.widgetID, menuItems);
        this._eventService.raiseWidgetSettingsApplied(selections);
    }
}
