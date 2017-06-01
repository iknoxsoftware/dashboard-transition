import { SettingsMenuID, SettingsSelectionID, SettingsMenuModel, SettingsItemModel } from "app/models/widget-settings.model";
import { PivotReportID } from "app/models/pivot-viewer.model";
import { WidgetID } from "app/models/widget.model";

export class WidgetSettingsHelper {
    static getMenuTitle(menuID: SettingsMenuID) : string {
        switch(menuID) {
            case SettingsMenuID.view:
                return "View";
            case SettingsMenuID.mission:
                return "Mission";
            case SettingsMenuID.group:
                return "Group";
            case SettingsMenuID.pivotViewerReport:
                return "Report";
            case SettingsMenuID.tagConfig:
                return "Configuration";
            case SettingsMenuID.airForceMds:
                return "MDS";
            case SettingsMenuID.detailColumn:
                return "Detail Column";
            case SettingsMenuID.imagery:
                return "Imagery";
            default:
                return "";
        }
    }

    static getSelectionType(widgetID: WidgetID, menuID: SettingsMenuID) : SettingsSelectionID {
        switch(menuID) {
            case SettingsMenuID.view:
            case SettingsMenuID.pivotViewerReport:
            case SettingsMenuID.tagConfig:
            case SettingsMenuID.mission:
            case SettingsMenuID.imagery:
            case SettingsMenuID.tagConfig:
                return SettingsSelectionID.singleRequired;
            case SettingsMenuID.group:
                return widgetID === WidgetID.pivotViewer ? SettingsSelectionID.singleRequired : SettingsSelectionID.multiple;
            default:
                return SettingsSelectionID.multiple;
        }
    }

    static getMenuVisibility(widgetID: WidgetID, menuID: SettingsMenuID): boolean {
        switch(widgetID) {
            case WidgetID.pivotViewer:
                return menuID === SettingsMenuID.pivotViewerReport;
            default:
                return true;
        }
    }

    static showHideSettingsMenus(item: SettingsItemModel, menus: Array<SettingsMenuModel>) {
        switch(item.menuID)
        {
            case SettingsMenuID.pivotViewerReport:
                this.showHideSettingsMenusPivotReport(item, menus);
                break;
        }
    }

    static buildSelectedKeys(items: Array<SettingsItemModel>) : string {
        if (items === undefined || items.length === 0)
            return "";

        let keys = "";
        for(let item of items) {
            keys += item.key + ",";
        }
        return keys.substr(0, keys.length - 1);
    }

    private static showHideSettingsMenusPivotReport(item: SettingsItemModel, menus: Array<SettingsMenuModel>) {
        switch(item.numberID) {
            case PivotReportID.commandReadiness:
                for(let menu of menus) {
                    menu.isVisible = menu.menuID == SettingsMenuID.pivotViewerReport ||
                                     menu.menuID == SettingsMenuID.mission ||
                                     menu.menuID == SettingsMenuID.group;
                }
                break;
            case PivotReportID.airForceAirAssets:
                for(let menu of menus) {
                    menu.isVisible = menu.menuID == SettingsMenuID.pivotViewerReport ||
                                     menu.menuID == SettingsMenuID.airForceMds;
                }
                break;
        }
    }
}