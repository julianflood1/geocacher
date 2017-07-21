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

  getAddress: any[]=null;
  getCoordinates: any[]=null;

  constructor(private router: Router, private geoSiteLocation: GeoSiteLocationService) { }



  getPhysicalAddress(lat: string, lng: string){
    this.geoSiteLocation.getPhysicalAddress(lat, lng).subscribe(response => {
      this.getAddress = response.json();
      console.log(this.getAddress)
    });
  }

  getGpsCoordinates(address: string){
    this.geoSiteLocation.getGpsCoordinates(address).subscribe(response => {
      this.getCoordinates = response.json();
      console.log(this.getCoordinates)
    });
  }

  // saveAddress(lat, lng, creator){
  //   this.geoSiteLocation.saveAddressInfo(lat, lng, creator);
  //   alert("This address been saved to the database!")
  // }
}
