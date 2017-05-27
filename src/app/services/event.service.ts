import { Injectable, EventEmitter } from '@angular/core';
import { MenuItemModel } from "app/models/menu.model";
import { SettingsSelectionModel } from "app/models/widget-settings.model";
import { WidgetHeaderModel } from "app/models/widget-header.model";
import { BusyBoxModel, BusyBoxMessageID } from "app/models/busy-box.model";

@Injectable()
export class EventService
{
    public eventShowBusyBox: EventEmitter<BusyBoxModel> = new EventEmitter();
    public eventHideBusyBox: EventEmitter<any> = new EventEmitter();
    public eventMenuItemSelected: EventEmitter<MenuItemModel> = new EventEmitter();
    public eventWidgetHeaderUpdated: EventEmitter<WidgetHeaderModel> = new EventEmitter();
    public eventWidgetSettingsApplied: EventEmitter<SettingsSelectionModel> = new EventEmitter();

    constructor () {}

    public raiseShowBusyBox(messageID: BusyBoxMessageID) {
        this.eventShowBusyBox.emit(new BusyBoxModel(messageID));
    }
    public raiseHideBusyBox() {
        this.eventHideBusyBox.emit(null);
    }
    public raiseMenuItemSelected(model: MenuItemModel) {
        this.eventMenuItemSelected.emit(model);
    }
    public raiseWidgetHeaderUpdated(model: WidgetHeaderModel) {
        this.eventWidgetHeaderUpdated.emit(model);
    }
    public raiseWidgetSettingsApplied(model: SettingsSelectionModel) {
        this.eventWidgetSettingsApplied.emit(model);
    }
}