import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Meal } from './../_models/meal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class MealService extends ResourceService<number, Meal> {

  constructor(private http : HttpClient) {
    super(http, 'meal')
  }

  getAllByActualWeek(): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/meal/findallavailablefortoday`);
  }

  getAllByWeekId(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/meal/findallavailableforweek/${id}`);
  }

}
