import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Menu } from './../_models/menu';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends ResourceService<number, Menu> {

  constructor(private http : HttpClient) {
    super(http, 'menu')
  }

  getAllByActualWeek(): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/menu/findallavailablefortoday`);
  }

  getAllByWeekId(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/menu/findallavailableforweek/${id}`);
  }
}
