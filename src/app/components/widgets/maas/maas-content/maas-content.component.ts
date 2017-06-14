import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { WidgetContentComponent } from "app/components/shared/widget-content/widget-content.component";
import { EventService } from "app/services/event.service";
import { WidgetID } from "app/models/widget.model";
import { WidgetHeaderItemModel, WidgetHeaderModel } from "app/models/widget-header.model";
import { BusyBoxMessageID } from "app/models/busy-box.model";
import { SettingsSelectionModel, SettingsMenuID, SettingsItemModel } from "app/models/widget-settings.model";

import { MaasBarChart } from 'app/components/widgets/maas/maas-content/maas/maas-bar-chart/maas-bar-chart-renderer';
import { DtTagConfig } from 'app/components/widgets/maas/maas-content/maas/services/dt-tag-config';

@Component({
    selector: 'maas-content',
    templateUrl: './maas-content.component.html',
    styleUrls: ['./maas-content.component.sass']
})
export class MaasContentComponent extends WidgetContentComponent implements OnInit, OnDestroy {
    @ViewChild(MaasBarChart)
    maasBarChart: MaasBarChart;

    dtTagConfig: DtTagConfig;

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

        // Refres Bar Chart
        this.resetBarChart(e);
    }

    buildWidgetHeader() {
        let headerItems: WidgetHeaderItemModel[] = [];
        let selectedTag = this.settingsSelections.getSelectedItem(SettingsMenuID.tagConfig);
        headerItems.push(new WidgetHeaderItemModel('Configuration', selectedTag.displayName));
        this.updateHeader(new WidgetHeaderModel(this.widgetID, headerItems, true));
    }

    resetBarChart(e: SettingsSelectionModel) {
        let tagConfigItem: SettingsItemModel = this.settingsSelections.getSelectedItem(SettingsMenuID.tagConfig);
        let detailColumnsItems: SettingsItemModel[] = this.settingsSelections.getSelectedItems(SettingsMenuID.detailColumn);

        this.maasBarChart.selectedDetailColumns = new Array<string>();

        for (let selectedDetailColumn of detailColumnsItems) {
            this.maasBarChart.selectedDetailColumns.push(selectedDetailColumn.displayName);
        }

        this.dtTagConfig = new DtTagConfig();

        this.dtTagConfig.DashboardId = 13
        this.dtTagConfig.UserName = "lsimpson";
        this.dtTagConfig.TagConfigId = tagConfigItem.guidID;
        this.dtTagConfig.TagConfigName = tagConfigItem.displayName;

        this.maasBarChart.dtTagConfig = this.dtTagConfig;

        // Refresh Bar Chart
        this.maasBarChart.setChart(this.dtTagConfig);
    }
}