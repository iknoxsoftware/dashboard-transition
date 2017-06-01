import { Component, OnInit, OnDestroy } from '@angular/core';
import { WidgetContentComponent } from "app/components/shared/widget-content/widget-content.component";
import { EventService } from "app/services/event.service";
import { WidgetID } from "app/models/widget.model";
import { WidgetHeaderItemModel, WidgetHeaderModel } from "app/models/widget-header.model";
import { BusyBoxMessageID } from "app/models/busy-box.model";
import { SettingsSelectionModel, SettingsMenuID } from "app/models/widget-settings.model";
import { PivotReportID } from 'app/models/pivot-viewer.model';
import { PivotViewerHelper } from "app/helpers/pivot-viewer.helper";

@Component({
    selector: 'pivot-viewer-content',
    templateUrl: './pivot-viewer-content.component.html',
    styleUrls: ['./pivot-viewer-content.component.sass']
})
export class PivotViewerContentComponent extends WidgetContentComponent implements OnInit, OnDestroy {
cxmlLoader: string;

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

        this.settingsSelections = e;
        this.buildWidgetHeader();
    }

    buildWidgetHeader() {
        let headerItems: WidgetHeaderItemModel[] = [];
        let selectedItem = this.settingsSelections.getSelectedItem(SettingsMenuID.pivotViewerReport);
        if (selectedItem !== undefined)
        {
            this.showBusyBox(BusyBoxMessageID.loading);
            headerItems.push(new WidgetHeaderItemModel('Report', selectedItem.displayName));
            this.updateHeader(new WidgetHeaderModel(this.widgetID, headerItems, true));
            this.cxmlLoader = PivotViewerHelper.buildCxmlLoader(selectedItem, this.settingsSelections);
        }
    }
}