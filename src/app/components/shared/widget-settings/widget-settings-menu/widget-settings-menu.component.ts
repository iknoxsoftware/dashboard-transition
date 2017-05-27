import { Component, OnInit, Input } from '@angular/core';
import { SettingsMenuModel, SettingsItemModel, SettingsSelectionID } from "app/models/widget-settings.model";

@Component({
    selector: 'widget-settings-menu',
    templateUrl: './widget-settings-menu.component.html',
    styleUrls: ['./widget-settings-menu.component.sass']
})
export class WidgetSettingsMenuComponent implements OnInit {
@Input() menuItem: SettingsMenuModel;

    constructor() { }

    ngOnInit() {
        
    }

    onSelected(event) {
        let item = event as SettingsItemModel;

        switch(this.menuItem.selectionID)
        {
            case SettingsSelectionID.singleRequired:
                this.handleSelectionTypeSingleRequired(item);
                break;
            case SettingsSelectionID.singleOptional:
                this.handleSelectionTypeSingleOptional(item);
                break;
            case SettingsSelectionID.multiple:
            default:
                this.handleSelectionTypeMultiple(item);
                break;
        }

        this.menuItem.setTitle();
    }

    handleSelectionTypeSingleRequired(item: SettingsItemModel) {
        for(let i of this.menuItem.items) {
            i.isChecked = i === item;
        }
    }

    handleSelectionTypeSingleOptional(item: SettingsItemModel) {
        item.isChecked = !item.isChecked;
        for(let i of this.menuItem.items) {
            if (i !== item)
                i.isChecked = false;
        }
    }

    handleSelectionTypeMultiple(item: SettingsItemModel) {
        item.isChecked = !item.isChecked;
        if (item.isAllItem)
        {
            for(let i of this.menuItem.items) {
                i.isChecked = item.isChecked;
            }
        }
        else if (this.menuItem.items.length > 1)
        {
            let allItem = this.menuItem.items[0];
            if (!item.isChecked)
                allItem.isChecked = false;
            else
            {
                if (this.menuItem.items.filter(i => !i.isAllItem &&
                                                    !i.isChecked).length === 0)
                    allItem.isChecked = true;
            }
        }
    }
}
