import { PivotReportID } from "app/models/pivot-viewer.model";
import { SettingsSelectionModel, SettingsItemModel, SettingsMenuID } from "app/models/widget-settings.model";
import { WidgetSettingsHelper } from "app/helpers/widget-settings.helper";

export class PivotViewerHelper {
    static getReportName(reportID: PivotReportID) : string {
        switch(reportID) {
            case PivotReportID.commandReadiness:
                return "Command Readiness";
            case PivotReportID.airForceAirAssets:
                return "Air Force Air Assets";
            default:
                return "";
        }
    }

    static buildCxmlLoader(selectedItem: SettingsItemModel, settingsSelections: SettingsSelectionModel) : string {
        let cxmlLoader = "";

        switch(selectedItem.numberID as PivotReportID)
        {
            case PivotReportID.commandReadiness:
                cxmlLoader = this.buildCommandReadiness(settingsSelections);
                break;
            case PivotReportID.airForceAirAssets:
                cxmlLoader = this.buildAirForceAirAssets(settingsSelections);
                break;
            default:
                break;
        }
        return cxmlLoader += "&cache=" + Date.now().toString();
    }

    private static buildCommandReadiness(settingsSelections: SettingsSelectionModel) : string {
        let selectedGroup = settingsSelections.getSelectedItem(SettingsMenuID.group);
        let selectedMission = settingsSelections.getSelectedItem(SettingsMenuID.mission);
        if (selectedGroup === undefined || selectedMission === undefined)
            return undefined;
        return "CommandReadiness.cxml?tagID=" + selectedGroup.guidID + "&missionNumber=" + selectedMission.key
    }

    private static buildAirForceAirAssets(settingsSelections: SettingsSelectionModel) : string {
        let selectedMds = settingsSelections.getSelectedItems(SettingsMenuID.airForceMds);
        if (selectedMds === null || selectedMds.length === 0)
            return undefined;
        return "AirForceAssets.cxml?Tms=" + WidgetSettingsHelper.buildSelectedKeys(selectedMds);
    }
}