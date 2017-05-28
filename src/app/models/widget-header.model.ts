
import { WidgetID } from "app/models/widget.model";

export class WidgetHeaderModel { 
    constructor(public widgetID: WidgetID, public headerItems: Array<WidgetHeaderItemModel>, public doAnimation: boolean) {}
}

export class WidgetHeaderItemModel { 
    isCollapsed: boolean;
    toolTip: string;
    constructor(public label: string, public value: string) {
        this.setToolTip();
    }
    
    doExpandCollapse() {
        this.isCollapsed = !this.isCollapsed;
        this.setToolTip();
    }
    setToolTip() {
        this.toolTip = this.isCollapsed ? "Show Data" : "Hide Data";
    }
}