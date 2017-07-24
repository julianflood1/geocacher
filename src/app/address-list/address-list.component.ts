import { Component, Input } from '@angular/core';
import { Item } from '../item.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { GeoSiteLocationService } from '../geo-site-location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css'],
  providers: [GeoSiteLocationService]
})
export class AddressListComponent {
  @Input() childLocations

  items: FirebaseListObservable<any[]>;

  constructor(private router: Router, private geoSiteLocation: GeoSiteLocationService) { }


saveGeocache(creator: string, address: string, lat: string, long: string) {
  let newItem: Item = new Item(creator, address, lat, long);
  this.geoSiteLocation.addItem(newItem);
  alert('This cache has been added to your list of geocaches.');
}


}
