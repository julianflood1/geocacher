import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { GeoSiteLocationService } from '../geo-site-location.service';
import { Item } from '../item.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [GeoSiteLocationService]
})
export class DetailComponent implements OnInit {

  itemToDisplay;
  itemId: string;


  constructor(private route: ActivatedRoute, private location: Location, private geoSiteLocation: GeoSiteLocationService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.itemId = urlParameters['id'];
    });
    this.itemToDisplay = this.geoSiteLocation.getItemById(this.itemId);
  }

  }
