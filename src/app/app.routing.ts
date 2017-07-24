import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGeoSiteComponent } from './add-geo-site/add-geo-site.component';
import { CacheListingsComponent } from './cache-listings/cache-listings.component';
import { DetailComponent } from './detail/detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AddGeoSiteComponent
  },
  {
    path: 'items',
    component: CacheListingsComponent
  },
  {
    path: 'items/:id',
    component: DetailComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
