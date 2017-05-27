import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { WidgetHeaderItemModel, WidgetHeaderModel } from "app/models/widget-header.model";
import { EventService } from "app/services/event.service";
import { WidgetID } from "app/models/widget.model";
import { Subscription } from "rxjs/Rx";

@Component({
    selector: 'widget-header',
    templateUrl: './widget-header.component.html',
    styleUrls: ['./widget-header.component.sass']
})
export class WidgetHeaderComponent implements OnInit, OnDestroy {
@Input() widgetID: WidgetID;
headerItems: WidgetHeaderItemModel[];
doAnimation: boolean;
subscription: Subscription;

    constructor(_eventService: EventService) {
        this.subscription = _eventService.eventWidgetHeaderUpdated.subscribe(e => this.onWidgetHeaderUpdated(e));
        this.doAnimation = false;
     }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onWidgetHeaderUpdated(e: WidgetHeaderModel) {
        if (this.widgetID !== e.widgetID)
            return;
        this.headerItems = e.headerItems;
        this.doAnimation = true;
    }
}
