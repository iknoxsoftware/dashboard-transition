import { Routes, RouterModule } from '@angular/router';
import { WidgetHelper } from '../helpers/widget.helper';

const PAGE_ROUTES : Routes = WidgetHelper.getRoutes();
export const RoutingData =  RouterModule.forRoot(PAGE_ROUTES);