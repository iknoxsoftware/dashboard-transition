import { Component, OnInit, OnDestroy } from '@angular/core';
import { WidgetContentComponent } from "app/components/shared/widget-content/widget-content.component";
import { EventService } from "app/services/event.service";
import { WidgetID } from "app/models/widget.model";
import { WidgetHeaderItemModel, WidgetHeaderModel } from "app/models/widget-header.model";
import { BusyBoxMessageID } from "app/models/busy-box.model";
import { SettingsSelectionModel, SettingsMenuID } from "app/models/widget-settings.model";

@Component({
    selector: 'iron-tracker-content',
    templateUrl: './iron-tracker-content.component.html',
    styleUrls: ['./iron-tracker-content.component.sass']
})
export class IronTrackerContentComponent extends WidgetContentComponent implements OnInit, OnDestroy {

    constructor(_eventService: EventService) { 
        super(WidgetID.ironTracker, _eventService);
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
        let headerItems: WidgetHeaderItemModel[] = [
            new WidgetHeaderItemModel('Widget', 'Iron Tracker')
        ];
        if (!this.settingsSelections.getNoItemsAreChecked(SettingsMenuID.group))
            headerItems.push(new WidgetHeaderItemModel('Groups', this.settingsSelections.getSelectedItems(SettingsMenuID.group).length.toString()));
        this.widgetHeader = new WidgetHeaderModel(this.widgetID, headerItems, true);
        this.updateHeader();
    }
}
