import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-tray',
  templateUrl: './tray.component.html',
  styleUrls: ['./tray.component.scss'],
})
export class TrayComponent implements OnInit {

  tray = [];
  totalPrice: number;

  constructor(
    private orderService: OrderService,
    private modal: ModalController) {}

  ngOnDestroy(): void {
    this.tray = [];
  }

  ngOnInit(): void {
    this.orderService.trayChange.subscribe(obj => {
      this.tray.push(obj);
      this.calcPrice();
    });
  }

  calcPrice() {
    this.totalPrice = 0;
    this.tray.forEach(i => this.totalPrice += parseFloat(i.priceDF));
  }

  remove(item) {
    this.tray = this.tray.filter(i => i.id != item.id);
    this.calcPrice();
  }

  dismissModal() {
    this.modal.dismiss();
  }
}
