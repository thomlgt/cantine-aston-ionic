import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/_models/order';

@Component({
  selector: 'app-profile-orders',
  templateUrl: './profile-orders.component.html',
  styleUrls: ['./profile-orders.component.scss'],
})
export class ProfileOrdersComponent implements OnInit {

  orders : Order[];

  constructor() { }

  ngOnInit() {}

}
