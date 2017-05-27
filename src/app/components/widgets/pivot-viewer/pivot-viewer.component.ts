import { Component, OnInit } from '@angular/core';
import { EventService } from "app/services/event.service";
import { WidgetComponent } from "app/components/shared/widget/widget.component";
import { WidgetID } from "app/models/widget.model";
import { SettingsMenuID } from "app/models/widget-settings.model";

@Component({
    selector: 'pivot-viewer',
    templateUrl: './pivot-viewer.component.html',
    styleUrls: ['../../shared/widget/widget.component.sass']
})
export class PivotViewerComponent extends WidgetComponent implements OnInit {
    constructor() {
        super(WidgetID.pivotViewer);
     }

    ngOnInit() {
        this.menuIDs = [
            SettingsMenuID.view
        ];
    }
}