import { PanelBarItemModel } from "@progress/kendo-angular-layout/dist/es/main";
import { WidgetID } from "app/data/widget.model";

export enum SettingsMenuID {
    view = 1,
    group = 2,
    mission = 3
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

    constructor(public name: string, public menuID: SettingsMenuID, public selectionID: SettingsSelectionID, public items: Array<SettingsItemModel>){
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
    name: string;
    guidID: string;
    numberID: number;
    tag: any;
    isLink: boolean;
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