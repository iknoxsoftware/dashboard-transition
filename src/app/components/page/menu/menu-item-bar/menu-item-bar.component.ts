import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router} from '@angular/router';
import { MenuItemModel } from "app/models/menu.model";
import { EventService } from "app/services/event.service";

@Component({
  selector: 'menu-item-bar',
  templateUrl: './menu-item-bar.component.html',
  styleUrls: ['./menu-item-bar.component.sass']
})

export class MenuItemBarComponent implements OnInit {
@Input() menuItems: MenuItemModel[];

    constructor(private _router: Router, private _eventService: EventService) { 
        _eventService.eventMenuItemSelected.subscribe(item => this.onMenuItemSelected(item));
    }

    ngOnInit(): void {
        if (this.menuItems !== null && this.menuItems.length > 0)
        {
            this.menuItems[this.menuItems.length - 1].isLastItem = true;
            this.onMenuItemSelected(this.menuItems[0]);
        }
    }

    onMenuItemSelected(menuItem: MenuItemModel) {
        for(let item of this.menuItems) {
            item.isSelected = item.id === menuItem.id;
        }
        let link = ['/' + menuItem.routerPath];
        this._router.navigate(link, { skipLocationChange: true });
    }
}
