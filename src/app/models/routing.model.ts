import { Routes, RouterModule } from '@angular/router';
import { WidgetHelper } from '../helpers/widget.helper';
import { ModuleWithProviders } from "@angular/core/core";

const PAGE_ROUTES : Routes = WidgetHelper.getRoutes();
export const RoutingData =  RouterModule.forRoot(PAGE_ROUTES);
