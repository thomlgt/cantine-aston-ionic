import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/_models/order';
import { OrderService } from 'src/app/_services/order.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-profile-orders',
  templateUrl: './profile-orders.component.html',
  styleUrls: ['./profile-orders.component.scss'],
})
export class ProfileOrdersComponent implements OnInit {

  orders : Order[];

  constructor(
    private orderService: OrderService,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.orderService.getAllByUserId(this.userService.getCurrentUser().id).subscribe(data => {
      this.orders = data;
    })
  }

}
