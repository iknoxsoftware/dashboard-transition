import { Component, OnInit, Input } from '@angular/core';
import { EventService } from "app/services/event.service";
import { MenuHeaderModel, MenuItemModel } from "app/models/menu.model";

@Component({
  selector: 'menu-header-bar',
  templateUrl: './menu-header-bar.component.html',
  styleUrls: ['./menu-header-bar.component.sass']
})
export class MenuHeaderBarComponent implements OnInit {
@Input() menuHeader: MenuHeaderModel;

    constructor(private _eventService: EventService) { 
        _eventService.eventMenuItemSelected.subscribe(item => this.onMenuItemSelected(item));
    }

    ngOnInit() {
    }

    onMenuItemSelected(menuItem: MenuItemModel) {
        this.menuHeader.selectedMenuItem = menuItem;
    }
}
