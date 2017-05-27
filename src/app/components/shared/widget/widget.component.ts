import { WidgetID } from "app/models/widget.model";
import { BusyBoxMessageID } from 'app/models/busy-box.model';
import { EventService } from "app/services/event.service";
import { SettingsMenuID } from "app/models/widget-settings.model";

export class WidgetComponent {
menuIDs: Array<SettingsMenuID>;

    constructor(public widgetID: WidgetID) {
    }
}