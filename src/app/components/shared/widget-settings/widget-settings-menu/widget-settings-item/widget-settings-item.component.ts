import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SettingsItemModel } from "app/models/widget-settings.model";

@Component({
    selector: 'widget-settings-item',
    templateUrl: './widget-settings-item.component.html',
    styleUrls: ['./widget-settings-item.component.sass']
})
export class WidgetSettingsItemComponent implements OnInit {
@Input() settingsItem: SettingsItemModel;
@Output() selected: EventEmitter<SettingsItemModel> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    onSelected(event) {
        this.selected.emit(this.settingsItem);
    }
}
