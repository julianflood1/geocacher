import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { GeoSiteLocationService } from '../geo-site-location.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-add-geo-site',
  templateUrl: './add-geo-site.component.html',
  styleUrls: ['./add-geo-site.component.css'],
  providers: [ GeoSiteLocationService ]
})
export class AddGeoSiteComponent {

  locations: any[]=null;
  // getCoordinates: any[]=null;

  constructor(private router: Router, private geoSiteLocation: GeoSiteLocationService) { }

  getPhysicalAddress(creator: string, lat: string, lng: string){
    this.geoSiteLocation.getPhysicalAddress(lat, lng).subscribe(response => {
    this.locations = response.json();
    console.log(this.locations)
  });
}
  }
