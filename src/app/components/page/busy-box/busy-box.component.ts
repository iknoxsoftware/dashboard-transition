import { Component, OnInit, Input } from '@angular/core';
import { EventService } from "app/services/event.service";
import { BusyBoxModel } from "app/models/busy-box.model";

@Component({
    selector: 'busy-box',
    templateUrl: './busy-box.component.html',
    styleUrls: ['./busy-box.component.sass']
})
export class BusyBoxComponent implements OnInit {
message: string;

    constructor(private _eventService: EventService) {
        _eventService.eventShowBusyBox.subscribe(e => this.onShowBusyBox(e));
     }

    ngOnInit() {
    }

    onShowBusyBox(e: BusyBoxModel) {
        this.message = e.message;
    }
}
