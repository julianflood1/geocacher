import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { geoKey } from './api-keys';
import { Item } from './item.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GeoSiteLocationService {
  items: FirebaseListObservable<any[]>;


  constructor(private http: Http, private database: AngularFireDatabase){
    this.items = database.list('items');
  }

  addItem(newItem: Item){
    this.items.push(newItem)
  }

  getItems(){
    return this.items;
  }

  getItemById(itemId: string) {
    return this.database.object('items/' + itemId);
  }

  getPhysicalAddress(lat: string, lng: string){
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key="+geoKey);
  }

//   getLatLongAddress(address: string, city: string, state: string){
//   return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+","+city+","+state+"&key="+geoKey);
// }
}
