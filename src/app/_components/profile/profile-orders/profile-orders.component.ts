import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/_models/order';
import { User } from 'src/app/_models/user';
import { OrderService } from 'src/app/_services/order.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-profile-orders',
  templateUrl: './profile-orders.component.html',
  styleUrls: ['./profile-orders.component.scss'],
})
export class ProfileOrdersComponent implements OnInit {

  orders: Order[];
  user: User;
  empty = true;

  constructor(private orderService: OrderService, private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();

    this.orderService.listForUser(this.user.id).subscribe( data => {
      this.empty = data.length == 0;
      this.orders = data;
      console.log(this.orders);
      this.orders.forEach(order => {
        this.orderService.getPrice(order.id).subscribe(response => {
          order.priceVAT = response.priceVAT;
        });
      })
    })
  };


}
