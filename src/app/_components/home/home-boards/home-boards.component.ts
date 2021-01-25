import { OrderService } from './../../../_services/order.service';
import { MenuService } from './../../../_services/menu.service';
import { Menu } from './../../../_models/menu';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-boards',
  templateUrl: './home-boards.component.html',
  styleUrls: ['./home-boards.component.scss'],
})
export class HomeBoardsComponent implements OnInit {

  menus: Menu[];

  constructor(
    private menuService: MenuService, 
    private orderService: OrderService) { }

  ngOnInit() {
    this.menuService.getAllByActualWeek().subscribe(
      (menus: Menu[]) => {
        let correctWeekMenus = menus.filter(menu => menu.availableForWeeks);
        this.menus = correctWeekMenus;
        console.log(this.menus);
      });
  }

  addToTray(menu) {
    this.orderService.addToTray(menu);
  }

  backgroundImage(index) {
    let imageId = this.menus[index].imageId;
    return 'background-image: url(./assets/img/menu/' + imageId + '.png)'
  }

}
