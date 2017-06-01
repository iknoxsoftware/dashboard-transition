import { PanelBarItemModel } from "@progress/kendo-angular-layout/dist/es/main";
import { WidgetID } from "app/models/widget.model";

export enum SettingsMenuID {
    group = 0,
    view = 1,
    mission = 2,
    service = 3,
    plan = 4,
    groupBy = 5,
    orderBy = 6,
    readinessDisplay = 7,
    requirementView = 8,
    airForceMds = 9,
    airForceMatcon = 10,
    base = 11,
    ppc = 12,
    majcom = 13,
    imagery = 14,
    overlay = 15,
    ngbMission = 16,
    ngbSeverity = 17,
    ngbFunction = 18,
    state = 19,
    femaRegion = 20,
    rotation = 21,
    quickView = 22,
    detailColumn = 23,
    pivotViewerReport = 24,
    navyMds = 25,
    navyMatcon = 26,
    usafMajcom = 27,
    tagConfig = 28,
    assigned = 29,
    planTypeBin = 30,
    esfSeverity = 31,
    esfFunction = 32,
    emcCapability = 33,
    groupMission = 34,
    groupMet = 35,
    groupArtUtc = 36,
    capabilitySearch = 37,
    ngbView = 38,
    assemblage = 39,
    assemblageBase = 40,
    assemblageMajcom = 41,
    capability = 42,
    component = 43,
    landmark = 44,
    unitNameSearch = 45,
}

export enum SettingsSelectionID {
    singleRequired = 1,
    singleOptional = 2,
    multiple = 3
}

export class SettingsMenuModel implements PanelBarItemModel {
    //Interface properties
    title: string;
    id: string;
    icon: string;
    iconClass: string;
    imageUrl: string;
    disabled: boolean;
    expanded: boolean;
    focused: boolean;
    selected: boolean;
    children: Array<SettingsMenuModel>;
    content: any;

    constructor(public name: string, public menuID: SettingsMenuID, public selectionID: SettingsSelectionID, public isVisible: boolean, public items: Array<SettingsItemModel>){
        this.setTitle();
    }

    setTitle() {
        this.title = this.buildTitle();
    }

    buildTitle() : string {
        if (this.items === null)
            return this.name;
        
        let selectedItems = this.items.filter(i => i.isChecked &&
                                                  !i.isAllItem);
        if (selectedItems.length > 0)
            return this.name + " (" + selectedItems.length + ")";
        return this.name;
    }
}

export class SettingsItemModel {
    isAllItem: boolean;
    displayName: string;
    isChecked: boolean;
    imagePath: string;
    key: string;
    guidID: string;
    numberID: number;
    tag: any;
    isLink: boolean;
    menuID: SettingsMenuID;
}

export class SettingsSelectionModel {
    constructor(public widgetID: WidgetID, public menus: Array<SettingsMenuModel>){
    }

    getAllItemsAreChecked(menuID: SettingsMenuID): boolean {
        let m = this.getSettingsMenu(menuID);
        if (m === undefined || m.items === undefined)
            return false;
        return m.items.find(i => !i.isChecked) === undefined;
    }

    getNoItemsAreChecked(menuID: SettingsMenuID): boolean {
        let m = this.getSettingsMenu(menuID);
        if (m === undefined || m.items === undefined)
            return false;
        return m.items.find(i => i.isChecked) === undefined;
    }

    getSelectedItem(menuID: SettingsMenuID): SettingsItemModel {
        let m = this.getSettingsMenu(menuID);
        if (m === undefined || m.items === undefined)
            return null;
        return m.items.find(i => i.isChecked);
    }

    getSelectedItems(menuID: SettingsMenuID): Array<SettingsItemModel> {
        let m = this.getSettingsMenu(menuID);
        if (m === undefined || m.items === undefined)
            return null;
        return m.items.filter(i => !i.isAllItem &&
                                    i.isChecked);
    }

    private getSettingsMenu(menuID: SettingsMenuID) : SettingsMenuModel {
        if (this.menus === null)
            return null;
        return this.menus.find(i => i.menuID === menuID);
    }
}