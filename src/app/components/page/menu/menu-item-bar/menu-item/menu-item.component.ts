import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { MenuItemModel } from "app/models/menu.model";
import { EventService } from "app/services/event.service";

@Component({
    selector: 'menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.sass']
})
export class MenuItemComponent implements OnInit {
@Input() menuItem: MenuItemModel;

    constructor(private _eventService: EventService) {
    }

    ngOnInit() {
    }

    menuItemClicked(event) {
        if (!this.menuItem.isSelected)
            this._eventService.raiseMenuItemSelected(this.menuItem);
    }
}
