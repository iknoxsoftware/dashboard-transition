import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { WidgetID } from "app/models/widget.model";
import { MenuModel, DashboardModel, MenuItemModel, UserModel, MenuHeaderModel } from "app/models/menu.model";

@Injectable()
export class MenuService
{
    constructor (private _http: Http) {}

    getMenuData(): MenuModel {
        let dashboard: DashboardModel = {
            id: 1,
            name: "Transition Demo",
        };

        let menuItems: MenuItemModel[] = [
            new MenuItemModel(WidgetID.maas, "Mission Assessment and SORTS"),
            new MenuItemModel(WidgetID.ironTracker, "Iron Tracker"),
            new MenuItemModel(WidgetID.pivotViewer, "Pivot Viewer")
        ];

        let user: UserModel = {
            username: "systemUser",
            displayName: "System User",
        };

        let menuHeader: MenuHeaderModel = {
            dashboard: dashboard,
            selectedMenuItem: menuItems[0],
            user: user
        };

        return { 
            isClassified: false,
            menuItems: menuItems,
            menuHeader: menuHeader
        };
    }
}