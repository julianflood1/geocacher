import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css'],
  providers: []
})
export class AddressListComponent {
  @Input() childAddress
  constructor() { }



}
