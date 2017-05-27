import { Component, OnInit } from '@angular/core';

import { EventService } from "app/services/event.service";
import { WidgetComponent } from "app/components/shared/widget/widget.component";
import { WidgetID } from "app/models/widget.model";
import { BusyBoxMessageID } from "app/models/busy-box.model";
import { SettingsMenuID } from "app/models/widget-settings.model";

@Component({
    selector: 'iron-tracker',
    templateUrl: './iron-tracker.component.html',
    styleUrls: ['../../shared/widget/widget.component.sass']
})
export class IronTrackerComponent extends WidgetComponent implements OnInit {
    constructor() {
        super(WidgetID.ironTracker);
    }

    ngOnInit() {
        this.menuIDs = [
            SettingsMenuID.view,
            SettingsMenuID.group,
        ];
    }
}
