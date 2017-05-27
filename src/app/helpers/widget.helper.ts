import { Route } from '@angular/router';

import { IronTrackerComponent } from '../components/widgets/iron-tracker/iron-tracker.component';
import { MaasComponent } from '../components/widgets/maas/maas.component';
import { PivotViewerComponent } from '../components/widgets/pivot-viewer/pivot-viewer.component';
import { WidgetModel, WidgetID } from "app/models/widget.model";

export class WidgetHelper {
    static WidgetModels: WidgetModel[] = [
        { widgetID: WidgetID.ironTracker, routerPath:'IronTracker', component:IronTrackerComponent, imageUrl: WidgetHelper.getWidgetImageUrl('GlobalReadiness') },
        { widgetID: WidgetID.maas, routerPath:'Maas', component:MaasComponent, imageUrl: WidgetHelper.getWidgetImageUrl('MissionAssessmentsAndSorts') },
        { widgetID: WidgetID.pivotViewer, routerPath:'PivotViewer', component:PivotViewerComponent, imageUrl: WidgetHelper.getWidgetImageUrl('PivotViewer') },
    ];
    static getWidget(widgetID: WidgetID): WidgetModel { 
        return WidgetHelper.WidgetModels.find(w => w.widgetID === widgetID); 
    }

    static getRoutes() : Route[]
    {
        let routes = [];
        for(let item of WidgetHelper.WidgetModels){
            routes.push(WidgetHelper.getWidgetRoute(item.widgetID));
        }
        return routes;
    }
    private static getWidgetRoute(widgetID: WidgetID): Route
    {
        let widget = WidgetHelper.getWidget(widgetID);
        return { path: widget.routerPath, component: widget.component };
    }
    private static getWidgetImageUrl(imageName: string): string
    {
        return "assets/widgets/" + imageName + ".png";
    }
}