import { Component, OnInit } from '@angular/core';
import { EventService } from "app/services/event.service";

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {
isBusy: boolean;

    constructor(private _eventService: EventService) { 
        _eventService.eventShowBusyBox.subscribe(e => this.onShowBusyBox());
        _eventService.eventHideBusyBox.subscribe(e => this.onHideBusyBox());
        this.onHideBusyBox();
    }

    ngOnInit() {
    }

    onShowBusyBox() {
        this.isBusy = true;
    }

    onHideBusyBox() {
        this.isBusy = false;
    }
}
