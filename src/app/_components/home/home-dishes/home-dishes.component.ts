import { OrderService } from './../../../_services/order.service';
import { MealService } from './../../../_services/meal.service';
import { Meal } from './../../../_models/meal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-dishes',
  templateUrl: './home-dishes.component.html',
  styleUrls: ['./home-dishes.component.scss'],
})
export class HomeDishesComponent implements OnInit {

  meals: Meal[];

  constructor(
    private mealService: MealService, 
    private orderService: OrderService) { }

  ngOnInit() {
    this.mealService.getAllByActualWeek().subscribe(
      (meals: Meal[]) => {
        let correctWeekMeals = meals.filter(meal => meal.availableForWeeks);
        this.meals = correctWeekMeals;
      });
  }

  addToTray(meal) {
    this.orderService.addToTray(meal);
  }

  backgroundImage(index) {
    let imageId = this.meals[index].imageId;
    return 'background-image: url(./assets/img/meal/' + imageId + '.png)'
  }

}
