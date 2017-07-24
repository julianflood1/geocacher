import { Component, OnInit } from '@angular/core';
import { GeoSiteLocationService } from '../geo-site-location.service';
import { Item } from '../item.model';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-cache-listings',
  templateUrl: './cache-listings.component.html',
  styleUrls: ['./cache-listings.component.css'],
  providers: [GeoSiteLocationService]
})
export class CacheListingsComponent implements OnInit {

  savedItems: FirebaseListObservable <any[]>;

  constructor(private geoSiteLocation: GeoSiteLocationService, private router: Router) { }

  ngOnInit() {
    this.savedItems = this.geoSiteLocation.getItems();
  }

  
  goToDetailPage(clickedItem) {
    this.router.navigate(['items', clickedItem.$key]);
  }

}
