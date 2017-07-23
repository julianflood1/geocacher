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

  getAddress: any[]=null;
  getCoordinates: any[]=null;

  constructor(private router: Router, private geoSiteLocation: GeoSiteLocationService) { }

  getPhysicalAddress(lat: string, lng: string, creator: string){
    let newItem: Item = new Item(creator, lat, lng);
    this.geoSiteLocation.addItem(newItem);
    alert('this item has been added to your list of geocaches!');
  };



}
  // getPhysicalAddress(lat: string, lng: string){
  //   this.geoSiteLocation.getPhysicalAddress(lat, lng).subscribe(response => {
  //     this.getAddress = response.json();
  //     console.log(this.getAddress)
  //   });
