import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { SettingsMenuModel, SettingsMenuID, SettingsItemModel, SettingsSelectionID } from "app/models/widget-settings.model";
import { PanelBarItemModel } from "@progress/kendo-angular-layout/dist/es/main";
import { WidgetSettingsHelper } from "app/helpers/widget-settings.helper";

@Injectable()
export class WidgetSettingsService
{
    constructor (private _http: Http) {}

    getMenuItems(menuIDs: Array<SettingsMenuID>): Array<SettingsMenuModel> {
        var result: Array<SettingsMenuModel> = [];

        for(let menuID of menuIDs){
            result.push(this.buildSettingsMenu(menuID));
        }
        return result;
    }

    private buildSettingsMenu(menuID: SettingsMenuID) : SettingsMenuModel {
        let items = this.buildMenuItemContent(menuID);
        let name = WidgetSettingsHelper.getMenuTitle(menuID);
        let selectionType = WidgetSettingsHelper.getSelectionType(menuID);

        let menuItem = new SettingsMenuModel(name, menuID, selectionType,  items);

        if(menuItem.selectionID === SettingsSelectionID.singleRequired)
        {
            menuItem.items[0].isChecked = true;
            menuItem.setTitle();
        }

        return menuItem;
    }

    private buildMenuItemContent(menuType: SettingsMenuID) : Array<SettingsItemModel> {
        switch(menuType) {
            case SettingsMenuID.view:
                return this.buildSettingsItemsView();
            case SettingsMenuID.mission:
                return this.buildSettingsItemsMission();
            case SettingsMenuID.group:
                return this.buildSettingsItemsGroup();
            default:
                return null;
        }
    }

    private buildSettingsItemsView() : Array<SettingsItemModel> {
        return [
            <SettingsItemModel> { displayName: "View 1" },
            <SettingsItemModel> { displayName: "View 2" }
        ];
    }

    private buildSettingsItemsMission() : Array<SettingsItemModel> {
        return [
            <SettingsItemModel> { displayName: "Mission 1" },
            <SettingsItemModel> { displayName: "Mission 2" },
            <SettingsItemModel> { displayName: "Mission 3" },
            <SettingsItemModel> { displayName: "Mission 4" },
        ];
    }

    private buildSettingsItemsGroup() : Array<SettingsItemModel> {
        return [
            <SettingsItemModel> { displayName: "All", isAllItem: true },
            <SettingsItemModel> { displayName: "Group 1" },
            <SettingsItemModel> { displayName: "Group 2" },
            <SettingsItemModel> { displayName: "Group 3" },
        ];
    }
}