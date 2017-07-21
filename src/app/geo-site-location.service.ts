import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { geoKey } from './api-keys';
import { Item } from './item.model';
// import { ItemService } from './item.service';

@Injectable()
export class GeoSiteLocationService {


  constructor(private http: Http) { }

  getPhysicalAddress(lat: string, lng: string){
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key="+geoKey);
  }

  getGpsCoordinates(address: string){
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key="+geoKey)
  }

  // saveAddressInfo(lat: string, lng: string) {
  //   return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key="+geoKey)
  //     .subscribe(response => {
  //       let newItem: Item
  //       for(let address of response.json() {
  //          newAddress = new Item(lat, lng, creator, address);
  //          this.ItemService.add
  //       })
  //     })
  // }
}
