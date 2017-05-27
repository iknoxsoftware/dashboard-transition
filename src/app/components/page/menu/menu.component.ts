import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuModel } from "app/models/menu.model";
import { MenuService } from "app/services/menu.service";

@Component({
    selector: 'page-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.sass']
})

export class MenuComponent implements OnInit {
menuData: MenuModel;

    constructor(private _menuService: MenuService) { }

    ngOnInit() {
        this.menuData = this._menuService.getMenuData();
    }
}
