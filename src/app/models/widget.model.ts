export enum WidgetID {
    ironTracker = 1 ,
    maas = 2,
    pivotViewer = 3
}

export class WidgetModel {
    widgetID: WidgetID;
    routerPath: string;
    imageUrl: string;
    component: any;
}