import { Component, OnInit, OnDestroy } from '@angular/core';
import { WidgetContentComponent } from "app/components/shared/widget-content/widget-content.component";
import { EventService } from "app/services/event.service";
import { WidgetID } from "app/models/widget.model";
import { WidgetHeaderItemModel, WidgetHeaderModel } from "app/models/widget-header.model";
import { BusyBoxMessageID } from "app/models/busy-box.model";
import { SettingsSelectionModel, SettingsMenuID } from "app/models/widget-settings.model";

@Component({
    selector: 'pivot-viewer-content',
    templateUrl: './pivot-viewer-content.component.html',
    styleUrls: ['./pivot-viewer-content.component.sass']
})
export class PivotViewerContentComponent extends WidgetContentComponent implements OnInit, OnDestroy {

    constructor(_eventService: EventService) { 
        super(WidgetID.pivotViewer, _eventService);
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
            new WidgetHeaderItemModel('Widget', 'Pivot Viewer')
        ];
        headerItems.push(new WidgetHeaderItemModel('View', this.settingsSelections.getSelectedItem(SettingsMenuID.view).displayName));
        this.widgetHeader = new WidgetHeaderModel(this.widgetID, headerItems, true);
        this.updateHeader();
    }
}