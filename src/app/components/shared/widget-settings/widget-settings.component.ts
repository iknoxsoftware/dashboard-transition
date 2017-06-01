import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { SettingsMenuModel, SettingsMenuID, SettingsSelectionModel, SettingsItemModel } from "app/models/widget-settings.model";
import { WidgetSettingsService } from "app/services/widget-settings.service";
import { PanelBarExpandMode } from "@progress/kendo-angular-layout/dist/es/main";
import { EventService } from "app/services/event.service";
import { WidgetID } from "app/models/widget.model";
import { WidgetSettingsHelper } from "app/helpers/widget-settings.helper";

@Component({
    selector: 'widget-settings',
    templateUrl: './widget-settings.component.html',
    styleUrls: ['./widget-settings.component.sass']
})
export class WidgetSettingsComponent implements OnInit, AfterViewInit {
@Input() widgetID: WidgetID;
@Input() menuIDs: Array<SettingsMenuID>;
expandMode: number = PanelBarExpandMode.Multiple;
allMenuItems: Array<SettingsMenuModel>;
menuItems: Array<SettingsMenuModel>;

    constructor(private _widgetSettingsService: WidgetSettingsService, private _eventService: EventService) { }

    ngOnInit() {
        this.allMenuItems = this._widgetSettingsService.getMenuItems(this.widgetID, this.menuIDs);
        this.setMenuItems();
    }

    ngAfterViewInit() {
        this.onSettingsApplied(null);
    }

    onSettingsApplied(event) {
        let menuItems = this.menuItems.slice();
        let selections = new SettingsSelectionModel(this.widgetID, menuItems);
        this._eventService.raiseWidgetSettingsApplied(selections);
    }

    onItemSelected(item: SettingsItemModel) {
        WidgetSettingsHelper.showHideSettingsMenus(item, this.allMenuItems);
        this.setMenuItems();
    }

    setMenuItems() {
        this.menuItems = this.allMenuItems.filter(i => i.isVisible);
    }
}
