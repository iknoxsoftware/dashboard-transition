import { Component, OnInit, OnDestroy } from '@angular/core';
import { WidgetContentComponent } from "app/components/shared/widget-content/widget-content.component";
import { EventService } from "app/services/event.service";
import { WidgetID } from "app/models/widget.model";
import { WidgetHeaderItemModel, WidgetHeaderModel } from "app/models/widget-header.model";
import { BusyBoxMessageID } from "app/models/busy-box.model";
import { SettingsSelectionModel, SettingsMenuID } from "app/models/widget-settings.model";

@Component({
    selector: 'maas-content',
    templateUrl: './maas-content.component.html',
    styleUrls: ['./maas-content.component.sass']
})
export class MaasContentComponent extends WidgetContentComponent implements OnInit, OnDestroy {

    constructor(_eventService: EventService) { 
        super(WidgetID.maas, _eventService);
        this.subscription = this._eventService.eventWidgetSettingsApplied.subscribe(e => this.onWidgetSettingsApplied(e));
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onWidgetSettingsApplied(e: SettingsSelectionModel) {
        if (e.widgetID !== this.widgetID || e === null)
            return;

        this.showBusyBox(BusyBoxMessageID.loading);
        this.settingsSelections = e;
        this.buildWidgetHeader();
    }

    buildWidgetHeader() {
        let headerItems: WidgetHeaderItemModel[] = [];
        let selectedTag = this.settingsSelections.getSelectedItem(SettingsMenuID.tagConfig);
        headerItems.push(new WidgetHeaderItemModel('Configuration', selectedTag.displayName));
        this.updateHeader(new WidgetHeaderModel(this.widgetID, headerItems, true));
    }
}