import { SettingsMenuID, SettingsSelectionID } from "app/models/widget-settings.model";

export class WidgetSettingsHelper {
    static getMenuTitle(menuID: SettingsMenuID) : string {
        switch(menuID) {
            case SettingsMenuID.view:
                return "View";
            case SettingsMenuID.mission:
                return "Mission";
            case SettingsMenuID.group:
                return "Group";
            default:
                return "";
        }
    }

    static getSelectionType(menuID: SettingsMenuID) : SettingsSelectionID {
        switch(menuID) {
            case SettingsMenuID.view:
                return SettingsSelectionID.singleRequired;
            case SettingsMenuID.mission:
                return SettingsSelectionID.singleOptional;
            case SettingsMenuID.group:
            default:
                return SettingsSelectionID.multiple;
        }
    }
}