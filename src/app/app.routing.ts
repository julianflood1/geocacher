import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGeoSiteComponent } from './add-geo-site/add-geo-site.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AddGeoSiteComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
