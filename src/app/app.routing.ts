import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGeoSiteComponent } from './add-geo-site/add-geo-site.component';
import { CacheListingsComponent } from './cache-listings/cache-listings.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AddGeoSiteComponent
  },
  {
    path: 'app-cache-listings',
    component: CacheListingsComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
