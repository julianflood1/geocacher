import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { GeoSiteLocationService } from '../geo-site-location.service';

@Component({
  selector: 'app-add-geo-site',
  templateUrl: './add-geo-site.component.html',
  styleUrls: ['./add-geo-site.component.css'],
  providers: [ GeoSiteLocationService ]
})
export class AddGeoSiteComponent {

  address: any[]=null;
  constructor(private router: Router, private geoSiteLocation: GeoSiteLocationService) { }



  getPhysicalAddress(lat: string, lng: string){
    console.log(lat)
    this.geoSiteLocation.getPhysicalAddress(lat, lng).subscribe(response => {
      this.address = response.json();
      console.log('hello');
      console.log(this.address);
    });
  }


}
