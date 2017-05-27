import { Component, OnInit, Input } from '@angular/core';
import { WidgetHeaderItemModel } from "app/models/widget-header.model";

@Component({
    selector: 'widget-header-item',
    templateUrl: './widget-header-item.component.html',
    styleUrls: ['./widget-header-item.component.sass']
})
export class WidgetHeaderItemComponent implements OnInit {
@Input() headerItem: WidgetHeaderItemModel;

    constructor() { }

    ngOnInit() {
    }

    onLabelSelected() {
        this.headerItem.doExpandCollapse();
    }
}
