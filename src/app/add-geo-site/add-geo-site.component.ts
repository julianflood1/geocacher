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

  constructor(private router: Router, private geoSiteLocation: GeoSiteLocationService) { }

  getPhysicalAddress(lat: string, lng: string){
    this.geoSiteLocation.getPhysicalAddress(lat, lng).subscribe(response => {
    this.locations = response.json();
    console.log(this.locations)
  });
}
  getCoordinates(streetAddress: string, city: string, state: string){
    this.geoSiteLocation.getCoordinates(streetAddress, city, state).subscribe(response => {
    this.locations = response.json();
    console.log(this.locations)
  });
}

}
