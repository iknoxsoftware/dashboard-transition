import { Component, OnInit, OnChanges, Input, HostListener } from '@angular/core';
import { PivotReportID } from 'app/models/pivot-viewer.model';
import { EventService } from "app/services/event.service";

declare var $: any;
declare var PivotViewer: any;

@Component({
  selector: 'pivot-viewer-view',
  templateUrl: './pivot-viewer-view.component.html',
  styleUrls: ['./pivot-viewer-view.component.sass']
})
export class PivotViewerViewComponent implements OnInit, OnChanges {
@Input() cxmlLoader: string;
showWarning: boolean;

    constructor(private _eventService: EventService) { 
        this.showWarning = true;
    }

    ngOnInit() {
    }

    ngOnChanges() {
        this.showWarning = this.cxmlLoader === undefined;
        if (!this.showWarning)
        {
            $('#pivotviewer').empty();
            $('#pivotviewer').PivotViewer({ Loader: new PivotViewer.Models.Loaders.CXMLLoader(this.cxmlLoader) });
        }
    }

    @HostListener('window:report-loaded', ['$event.target']) reportLoaded() {
        this._eventService.raiseHideBusyBox();
    }
}
