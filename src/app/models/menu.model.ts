
import { WidgetID } from "app/data/widget.model";
import { WidgetHelper } from "app/helpers/widget.helper";

export class MenuModel {
    isClassified: boolean;
    menuItems: MenuItemModel[];
    menuHeader: MenuHeaderModel;
}

export class MenuItemModel { 
    isSelected: boolean;
    isLastItem: boolean;
    routerPath: string;
    imageUrl: string;

    constructor(public id: WidgetID, public name: string) { 
        this.isSelected = false;
        this.isLastItem = false;
        this.routerPath = WidgetHelper.getWidget(id).routerPath;
        this.imageUrl = WidgetHelper.getWidget(id).imageUrl;
    }
}

export class MenuHeaderModel { 
    dashboard: DashboardModel;
    selectedMenuItem: MenuItemModel;
    user: UserModel;
}

export class UserModel { 
    username: string;
    displayName: string;
}

export class DashboardModel { 
    id: number;
    name: string;
}