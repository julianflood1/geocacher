import { TestBed, inject } from '@angular/core/testing';

import { GeoSiteLocationService } from './geo-site-location.service';

describe('GeoSiteLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoSiteLocationService]
    });
  });

  it('should be created', inject([GeoSiteLocationService], (service: GeoSiteLocationService) => {
    expect(service).toBeTruthy();
  }));
});
